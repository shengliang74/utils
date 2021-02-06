import { isObject, stringTrim } from './utils'

// innerHtml封装
export function setHtml(ele, html) {
    if (ele != null && html !== undefined) {
        ele.innerHTML = html
    }
}

// appendHtml添加网页元素
export function AppendHtml(ele, html) {
    var div = document.createElement('div')
    setHtml(div, html)
    while (div.childNodes.length > 0) {
        ele.appendChild(div.childNodes[0])
    }
}

// 隐藏
export function setHide(ele) {
    if (ele != null && ele.style != undefined) {
        ele.style.display = 'none'
    }
}

// 显示
export function setShow(ele) {
    if (ele != null && ele.style != undefined) {
        ele.style.display = ''
    }
}

// 获取屏幕宽度
export function getScreenWidth() {
    return window.innerWidth * (window.devicePixelRatio || 1)
}

// 获取屏幕高度
export function getScreenHeight() {
    return window.innerHeight * (window.devicePixelRatio || 1)
}

// 获取body的宽度
export function getBodyWidth() {
    return document.body.offsetWidth || window.screen.width
}

// 获取body的高度
export function getBodyHeight() {
    return document.body.offsetHeight || window.screen.height
}

// 获取元素宽度
export function getWidth(ele) {
    if (ele != null && ele.style != undefined) {
        if (ele.style.width == '') {
            if (ele.parentNode != null) {
                return GetWidth(ele.parentNode)
            } else {
                return getBodyWidth()
            }
        } else if (ele.style.width.indexOf('%') > 0) {
            var parentWidth = GetWidth(ele.parentNode)
            var rate = parseFloat(ele.style.width)
            return parentWidth * rate / 100
        } else {
            return parseFloat(ele.style.width)
        }
    }
    return ele.body != undefined ? getBodyWidth() : 0
}

// 设置宽度
export function setWidth(ele, width) {
    if (ele != null && ele.style != undefined) {
        var w = parseFloat(width)
        if (!isNaN(w)) {
            ele.style.width = w.toString() + 'px'
        }
    }
}

// 获取元素高度
export function getHeight(ele) {
    if (ele != null && ele.style != undefined) {
        if (ele.style.height == '') {
            if (ele.parentNode != null) {
                return getHeight(ele.parentNode)
            } else {
                return getBodyHeight()
            }
        } else if (ele.style.height.indexOf('%') > 0) {
            var parentHeight = getHeight(ele.parentNode)
            var rate = parseFloat(ele.style.height)
            return parentHeight * rate / 100
        } else {
            return parseFloat(ele.style.height)
        }
    }
    return ele.body != undefined ? getBodyHeight() : 0
}

// 设置高度
export function setHeight(ele, height) {
    if (ele != null && ele.style != undefined) {
        var h = parseFloat(height)
        if (!isNaN(h)) {
            ele.style.height = h.toString() + 'px'
        }
    }
}

// 设置元素的style
export function setStyle(ele, style) {
    if (ele != null && ele.style != undefined) {
        if (isObject(style)) {
            for (var key in style) {
                ele.style[key] = style[key]
            }
        }
    }
}

// 设置元素style的某个值
export function setStyleValue(ele, key, value) {
    if (ele != null && ele.style != undefined) {
        ele.style[key] = value
    }
}

// 删除class
export function removeClass(ele, className) {
    if (ele != null && ele.className != undefined) {
        ele.className = stringTrim(ele.className.replace(className, '').replace('  ', ''))
    }
}

// 新增class
export function addClass(ele, className) {
    if (ele != null && ele.className != undefined) {
        className = stringTrim(ele.className) + ' ' + className
        ele.className = stringTrim(className)
    }
}

// 新增bind事件
export function addEvent(ele, eventName, fn) {
    if (ele.attachEvent) {
        ele.attachEvent('on' + eventName, fn)
    } else if (ele.addEventListener) {
        ele.addEventListener(eventName, fn, false)
    } else {
        ele['on' + eventName] = fn
    }
}

// 移除事件
export function removeEvent(ele, eventName, fn) {
    if (ele.attachEvent) {
        ele.detachEvent('on' + eventName, fn)
    } else if (ele.addEventListener) {
        ele.removeEventListener(eventName, fn, false)
    } else {
        ele['on' + eventName] = null
    }
}

export function bindEvent(ele, eventName, fn) {
    removeEvent(ele, eventName, fn)
    addEvent(ele, eventName, fn)
}

// 加载CSS
export function loadCss(id, content) {
    var newStyle = document.createElement('style')
    newStyle.type = 'text/css'
    newStyle.id = id
    if (typeof newStyle.styleSheet != 'undefined') {
        newStyle.styleSheet.cssText = content
    } else {
        newStyle.innerHTML = content
    }
    document.getElementsByTagName('head')[0].appendChild(newStyle)
}

// 加载JS
export function loadJS(url, callback, errcallback) {
    var documentHeader = document.head || document.getElementsByTagName('head')[0]
    // 防止单页应用加载多次
    var addSign = true
    var scripts = document.getElementsByTagName('script')
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i] && scripts[i].src && scripts[i].src.indexOf(url) != -1) {
            addSign = false
        }
    }
    if (addSign) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.charset = 'utf-8'
        script.async = true
        script.src = url
        documentHeader.appendChild(script)
        script.onload = function () {
            callback && callback()
        }
        script.onerror = function () {
            errcallback && errcallback()
            documentHeader.removeChild(script)
        }
    } else {
        callback && callback()
    }
}

// 加载CSS引用
export function loadLink(url) {
    // 防止单页应用加载多条
    var addSign = true
    var links = document.getElementsByTagName('link')
    for (var i = 0; i < links.length; i++) {
        if (links[i] && links[i].href && links[i].href.indexOf(url) != -1) {
            addSign = false
        }
    }
    if (addSign) {
        var link = document.createElement('link')
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.href = url
        document.getElementsByTagName('head')[0].appendChild(link)
    }
}

// js删除script
export function removeScript(src) {
    var scripts = document.getElementsByTagName('script')
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i] && scripts[i].src && scripts[i].src.indexOf(src) != -1) {
            scripts[i].parentNode.removeChild(scripts[i])
        }
    }
}

// js删除link文件
export function removelink(href) {
    var links = document.getElementsByTagName('link')
    for (var i = 0; i < links.length; i++) {
        if (links[i] && links[i].href && links[i].href.indexOf(href) != -1) {
            links[i].parentNode.removeChild(links[i])
        }
    }
}
