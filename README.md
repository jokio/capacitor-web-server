# capacitor-web-server

Web Server for iOS and Android

## Install

```bash
npm install capacitor-web-server
npx cap sync
```

## API

<docgen-index>

* [`start(...)`](#start)
* [`stop()`](#stop)
* [`onRequest(...)`](#onrequest)
* [`sendResponse(...)`](#sendresponse)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### start(...)

```typescript
start(props: { deviceName?: string; port?: number; publicFolderPath?: string; apiPath?: string; }) => Promise<{ serverUrl: string; }>
```

| Param       | Type                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------- |
| **`props`** | <code>{ deviceName?: string; port?: number; publicFolderPath?: string; apiPath?: string; }</code> |

**Returns:** <code>Promise&lt;{ serverUrl: string; }&gt;</code>

--------------------


### stop()

```typescript
stop() => Promise<void>
```

--------------------


### onRequest(...)

```typescript
onRequest(callback: PluginCallback) => Promise<void>
```

| Param          | Type                                                      |
| -------------- | --------------------------------------------------------- |
| **`callback`** | <code><a href="#plugincallback">PluginCallback</a></code> |

--------------------


### sendResponse(...)

```typescript
sendResponse(props: { requestId: string; body: string; status?: number; headers?: Record<string, string>; }) => Promise<void>
```

| Param       | Type                                                                                                                             |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **`props`** | <code>{ requestId: string; body: string; status?: number; headers?: <a href="#record">Record</a>&lt;string, string&gt;; }</code> |

--------------------


### Interfaces


#### PluginResultData


#### PluginResultError

| Prop          | Type                |
| ------------- | ------------------- |
| **`message`** | <code>string</code> |


### Type Aliases


#### PluginCallback

<code>(data: <a href="#pluginresultdata">PluginResultData</a>, error?: <a href="#pluginresulterror">PluginResultError</a>): void</code>


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>

</docgen-api>
