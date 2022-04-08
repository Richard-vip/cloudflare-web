## 一、 HTTP 缓存策略

### 强缓存

#### Expires

> Expires是http1.0提出的一个表示资源过期时间的header，它描述的是一个绝对时间，由服务器返回。
> Expires 受限于本地时间，如果修改了本地时间，可能会造成缓存失效

#### Cache-Control

> Cache-Control 出现于 HTTP / 1.1，优先级高于 Expires ,表示的是相对时间

1. Max-age 
2. No-cache  可以缓存在本地 、但是在与服务器进行验证时，不让使用
3. No-store 真正的不缓存数据到本地
4. Public 可以被所有用户缓存
5. Private  只能被终端浏览器缓存

## 协商缓存

### Last-Modified, If-Modified-Since

>`Last-Modified` 表示本地文件最后修改日期，浏览器会在request header加上`If-Modified-Since`（上次返回的`Last-Modified`的值），询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来
>
>但是如果在本地打开缓存文件，就会造成 Last-Modified 被修改，所以在 HTTP / 1.1 出现了 ETag

### Etag、If-None-Match

> `Etag`就像一个指纹，资源变化都会导致ETag变化，跟最后修改时间没有关系，`ETag`可以保证每一个资源是唯一的
>
> `If-None-Match`的header会将上次返回的`Etag`发送给服务器，询问该资源的`Etag`是否有更新，有变动就会发送新的资源回来

## 状态码

- `200`：强缓Expires/Cache-Control存失效时，返回新的资源文件
- `200(from cache)`: 强缓Expires/Cache-Control两者都存在，未过期，Cache-Control优先Expires时，浏览器从本地获取资源成功
- `304(Not Modified )`：协商缓存Last-modified/Etag没有过期时，服务端返回状态码304



## 二、 本地缓存

1、cookie：4K，可以手动设置失效期
2、localStorage：5M，除非手动清除，否则一直存在
3、sessionStorage：5M，不可以跨标签访问，页面关闭就清理
4、indexedDB：浏览器端数据库，无限容量，除非手动清除，否则一直存在
5、Web SQL：关系数据库，通过SQL语句访问（已经被抛弃）







## 三、 离线缓存

