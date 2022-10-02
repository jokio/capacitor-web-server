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
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### start(...)

```typescript
start(props: { publicFolderPath?: string; hostname?: string; port?: number; }) => Promise<boolean>
```

| Param       | Type                                                                          |
| ----------- | ----------------------------------------------------------------------------- |
| **`props`** | <code>{ publicFolderPath?: string; hostname?: string; port?: number; }</code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### stop()

```typescript
stop() => Promise<void>
```

--------------------


### onRequest(...)

```typescript
onRequest(callback: (props: { requestId: string; headers: Record<string, string>; method: string; path: string; query: Record<string, string>; body: string; }) => void) => Promise<void>
```

| Param          | Type                                                                                                                                                                                                                        |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`callback`** | <code>(props: { requestId: string; headers: <a href="#record">Record</a>&lt;string, string&gt;; method: string; path: string; query: <a href="#record">Record</a>&lt;string, string&gt;; body: string; }) =&gt; void</code> |

--------------------


### sendResponse(...)

```typescript
sendResponse(props: { requestId: string; status: number; body: string; headers: Record<string, string>; }) => Promise<void>
```

| Param       | Type                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **`props`** | <code>{ requestId: string; status: number; body: string; headers: <a href="#record">Record</a>&lt;string, string&gt;; }</code> |

--------------------


### Type Aliases


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>

</docgen-api>
