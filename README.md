# capacitor-web-server

Web Server for iOS and Android

## Install

```bash
npm install capacitor-web-server
npx cap sync
```

## API

<docgen-index>

* [`getIpAddress()`](#getipaddress)
* [`start(...)`](#start)
* [`stop()`](#stop)
* [`onRequest(...)`](#onrequest)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getIpAddress()

```typescript
getIpAddress() => Promise<{ ipAddress: string; }>
```

**Returns:** <code>Promise&lt;{ ipAddress: string; }&gt;</code>

--------------------


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
onRequest(props: { headers: Record<string, string>; method: string; path: string; query: Record<string, string>; body: string; }) => Promise<Object>
```

| Param       | Type                                                                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`props`** | <code>{ headers: <a href="#record">Record</a>&lt;string, string&gt;; method: string; path: string; query: <a href="#record">Record</a>&lt;string, string&gt;; body: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#object">Object</a>&gt;</code>

--------------------


### Interfaces


#### Object

Provides functionality common to all JavaScript objects.

| Prop              | Type                                          | Description                                                                                                                                |
| ----------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **`constructor`** | <code><a href="#function">Function</a></code> | The initial value of <a href="#object">Object</a>.prototype.constructor is the standard built-in <a href="#object">Object</a> constructor. |

| Method                   | Signature                                                 | Description                                                              |
| ------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| **toString**             | () =&gt; string                                           | Returns a string representation of an object.                            |
| **toLocaleString**       | () =&gt; string                                           | Returns a date converted to a string using the current locale.           |
| **valueOf**              | () =&gt; <a href="#object">Object</a>                     | Returns the primitive value of the specified object.                     |
| **hasOwnProperty**       | (v: <a href="#propertykey">PropertyKey</a>) =&gt; boolean | Determines whether an object has a property with the specified name.     |
| **isPrototypeOf**        | (v: <a href="#object">Object</a>) =&gt; boolean           | Determines whether an object exists in another object's prototype chain. |
| **propertyIsEnumerable** | (v: <a href="#propertykey">PropertyKey</a>) =&gt; boolean | Determines whether a specified property is enumerable.                   |


#### Function

Creates a new function.

| Prop            | Type                                          |
| --------------- | --------------------------------------------- |
| **`prototype`** | <code>any</code>                              |
| **`length`**    | <code>number</code>                           |
| **`arguments`** | <code>any</code>                              |
| **`caller`**    | <code><a href="#function">Function</a></code> |

| Method       | Signature                                                                            | Description                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **apply**    | (this: <a href="#function">Function</a>, thisArg: any, argArray?: any) =&gt; any     | Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.                                                                     |
| **call**     | (this: <a href="#function">Function</a>, thisArg: any, ...argArray: any[]) =&gt; any | Calls a method of an object, substituting another object for the current object.                                                                                                                                         |
| **bind**     | (this: <a href="#function">Function</a>, thisArg: any, ...argArray: any[]) =&gt; any | For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters. |
| **toString** | () =&gt; string                                                                      | Returns a string representation of a function.                                                                                                                                                                           |


### Type Aliases


#### PropertyKey

<code>string | number | symbol</code>


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>

</docgen-api>
