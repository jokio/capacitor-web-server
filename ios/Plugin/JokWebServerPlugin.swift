import Foundation
import Capacitor
import GCDWebServer

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(JokWebServerPlugin)
public class JokWebServerPlugin: CAPPlugin, GCDWebServerDelegate {
    let TIMEOUT: Int = 60 * 3 * 1000000

    private var server = GCDWebServer()
    private var onRequestCommand: CAPPluginCall? = nil
    private var responses = SynchronizedDictionary<AnyHashable,Any?>()
    
    @objc func start(_ call: CAPPluginCall) {
        let port =  call.getInt("port", 8080)
        let publicFolderPath = call.getString("publicFolderPath", "/public")
        let apiPath = call.getString("apiPath", "/api")
        let deviceName = call.getString("deviceName", "GamingCenter")
        
        let contentPath = Bundle.main.resourceURL!.path + publicFolderPath

        server.addGETHandler(forBasePath: "/", directoryPath: contentPath, indexFilename: "index.html", cacheAge: 3600, allowRangeRequests: true)
        
        server.addHandler(match: { requestMethod, requestURL, requestHeaders, urlPath, urlQuery in
            if (urlPath.starts(with: apiPath)){
                return GCDWebServerDataRequest(
                    method: requestMethod,
                    url: requestURL,
                    headers: requestHeaders,
                    path: urlPath,
                    query: urlQuery
                )
            }
            else {
                return nil
            }
        }, asyncProcessBlock: self.processRequest)

        server.delegate = self
                
        server.start(withPort: UInt(port), bonjourName: deviceName)
        
        let serverUrl = server.serverURL
        let bonjourUrl = server.bonjourServerURL
        let publicUrl = server.publicServerURL
        
        call.resolve([
            "serverUrl": serverUrl?.absoluteString ?? "",
            "bonjourUrl": bonjourUrl?.absoluteString ?? "",
            "publicUrl": publicUrl?.absoluteString ?? "",
        ])
    }
    
    @objc func stop(_ command: CAPPluginCall) {
        if server.isRunning {
            server.stop()
        }
        
        print("Stopping webserver")
        
        if onRequestCommand != nil {
            onRequestCommand!.keepAlive = false
            onRequestCommand!.resolve()
        }
    }
    
    @objc func onRequest(_ call: CAPPluginCall) {
        self.onRequestCommand = call
        call.keepAlive = true
    }

    @objc func sendResponse(_ call: CAPPluginCall) {
        let requestId = call.getString("requestId", "")
        let status = call.getInt("status", 200)
        let body = call.getString("body", "")
        let headers = call.getObject("headers")
        
        if (requestId != "") {
            let response: [AnyHashable: Any] = [
                "status": status,
                "body": body,
                "headers": headers,
            ]
            self.responses[requestId] = response
        } else {
            print("invalid response received, \(String(describing: requestId)) \(String(describing: status))")
        }
    }
    
    public func webServerDidCompleteBonjourRegistration(_ server: GCDWebServer) {
        self.bridge?.triggerDocumentJSEvent(
            eventName: "bonjourUrlRegistered",
            data: ("{'bonjourUrl': '" + (server.bonjourServerURL?.absoluteString ?? "") + "'}")
        )
    }
    
    func processRequest(req: GCDWebServerRequest, completionBlock: GCDWebServerCompletionBlock) {
        var timeout = 0
        // Fetch data as GCDWebserverDataRequest
        let requestUUID = UUID().uuidString
        // Transform it into an dictionary for the javascript plugin
        let requestDict = self.requestToRequestDict(requestUUID: requestUUID, request: req)
        
        if (onRequestCommand != nil) {
            onRequestCommand!.resolve(requestDict)
        }
        
        // Here we have to wait until the javascript block fetches the message and do a response
        while self.responses[requestUUID] == nil {
            timeout += 1000
            usleep(1000)
            
            if (timeout > TIMEOUT) {
                self.responses[requestUUID] = [
                    ["status", 500],
                    ["body", "Processing Timeout :("]
                ]
                break
            }
        }

        // We got the dict so put information in the response
        let responseDict = self.responses[requestUUID] as! Dictionary<AnyHashable, Any>

        // Check if a file path is provided else use regular data response
        let response = GCDWebServerDataResponse(text: responseDict["body"] as! String)

        if responseDict["status"] != nil {
            response?.statusCode = responseDict["status"] as! Int
        }

        for (key, value) in (responseDict["headers"] as! Dictionary<String, String>) {
            response?.setValue(value, forAdditionalHeader: key)
        }

        // Remove the handled response
        self.responses.removeValue(forKey: requestUUID)

        // Complete the async response
        completionBlock(response!)
    }
    
    func requestToRequestDict(requestUUID: String, request: GCDWebServerRequest) -> Dictionary<String, Any> {
        let dataRequest = request as! GCDWebServerDataRequest
        var body = ""

        if dataRequest.hasBody() {
            body = String(data: dataRequest.data, encoding: String.Encoding(rawValue: String.Encoding.utf8.rawValue)) ?? ""
        }

        return [
            "requestId": requestUUID,
            "body": body,
            "headers": dataRequest.headers,
            "method": dataRequest.method,
            "path": dataRequest.url.path,
            "query": dataRequest.url.query ?? ""
        ]
    }
}
