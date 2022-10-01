import Foundation
import Capacitor
import GCDWebServer

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(JokWebServerPlugin)
public class JokWebServerPlugin: CAPPlugin {
    private let server = GCDWebServer()

    @objc func getIpAddress(_ call: CAPPluginCall) {
        var address : String?
        
        // Get list of all interfaces on the local machine:
        var ifaddr : UnsafeMutablePointer<ifaddrs>?
        guard getifaddrs(&ifaddr) == 0 else {
            call.reject("Address not found")
            return
        }
        guard let firstAddr = ifaddr else {
            call.reject("Address not found")
            return
        }
        
        // For each interface ...
        for ifptr in sequence(first: firstAddr, next: { $0.pointee.ifa_next }) {
            let interface = ifptr.pointee
            
            // Check for IPv4 or IPv6 interface:
            let addrFamily = interface.ifa_addr.pointee.sa_family
            if addrFamily == UInt8(AF_INET) || addrFamily == UInt8(AF_INET6) {
                
                // Check interface name:
                let name = String(cString: interface.ifa_name)
                if  (name == "en0") || (name == "pdp_ip0")  {
                    
                    // Convert interface address to a human readable string:
                    var hostname = [CChar](repeating: 0, count: Int(NI_MAXHOST))
                    getnameinfo(interface.ifa_addr, socklen_t(interface.ifa_addr.pointee.sa_len),
                                &hostname, socklen_t(hostname.count),
                                nil, socklen_t(0), NI_NUMERICHOST)
                    address = String(cString: hostname)
                }
            }
        }
        
        freeifaddrs(ifaddr)
        
        call.resolve([
            "ipAddress": address!
        ])
    }
    
    @objc func start(_ call: CAPPluginCall) {
        print("received it")
        let host = call.getString("host", "0.0.0.0")
        let port = call.getInt("port", 8080)
        let publicFolderPath = call.getString("publicFolderPath", "/public")
        let deviceName = call.getString("deviceName", "Gaming Center")
        
        let contentPath = Bundle.main.resourceURL!.path + publicFolderPath
        
        server.addGETHandler(forBasePath: "/", directoryPath: contentPath, indexFilename: "index.html", cacheAge: 3600, allowRangeRequests: true)
        
        server.addHandler(forMethod: "GET", path: "/test", request: GCDWebServerURLEncodedFormRequest.self) { req in
            
            let jsonResponse = ["type":"success","Message":"Image not avilable."]
            
            return GCDWebServerDataResponse(jsonObject: jsonResponse)
        }
        
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
}
