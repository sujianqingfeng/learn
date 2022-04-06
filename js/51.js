const PBK = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu4hs7mJNWf0QMOdjt85N65G0Vb1dCsbfupAQcAcHKj8YMTNyijhpvh25tgaXuiVT6pY90IzXUVcPsDBVgCSPTIc64l47fQDqR4a6WEwq/5Xlxjvu0nFEsofHhRvTwva1mkPmxbRYy9dk4ldakJK6yyM76HyQGj+brXYFMdnuHWLNyI675h7EPgUec+0BnDq8Nhz/jIVz1kZuWtilOQzXHrj/Sh2KFnEDxWQI4LkmBbUXXnxh8wc5WFtktuOrMa+zvh33qzmhjYX5t4QlQiIWV6NvMuSsk3uwxscnNzJsFWPsaa7ioJ3nI0Kx+ewwKAe9WsL4NuHvV383DVAdSWMEEwIDAQAB-----END PUBLIC KEY-----"
const PTK = "E080593DB2F2ED104C9C9166F32A12B6"


const num ="1Z5774F00398987800"
const expressCode= "ups"


const JSEncrypt = require('node-jsencrypt')

var MTS = require("crypto-js");




var bu = function(a, p, t, d, e, k) {
    this.encrypt = function(s, l) {
        var a = s.split("")
          , le = s.length
          , b = Math.ceil(le / 2)
          , x = [];
        while (l--) {
            var r = this.random(1, le - 1);
            var t = a[r];
            a[r] = a[b];
            a[b] = t;
            x.push(r - b)
        }
        return {
            s: a.join(""),
            x: x.join(",")
        }
    }
    ;
    this.random = function(n, x) {
        switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * n + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (x - n + 1) + n, 10);
            break;
        default:
            return 0;
            break
        }
    }
    ;
    if (a.n) {
        var s = this.encrypt(a.n, this.random(4, 8));
        a.n = s.s;
        a.x = s.x
    }
		a = {n: "1ZF774300098987850", e: "ups", x: "0,-3,-7,7"}
    e = e || new JSEncrypt() ;
    e.setPublicKey(p);
    a = JSON.stringify(a);
		console.log(a)
		console.log('enc---',e.encrypt(a))
    d = d || JSON.stringify({
        t: e.encrypt(a)
    });

    k = k || MTS.enc.Hex.parse(t);
    d = MTS.AES.encrypt(d, k, {
        iv: k,
        padding: MTS.pad.ZeroPadding
    });
    return d.toString()
}
  , du = function(r, t) {
    var a = r.d
      , b = r.t
      , ct = a.ct
      , js = b.js
      , x = b.x.split(",");
    eval(js);
    this.d = function(s, x) {
        x.reverse();
        var a = s.split("")
          , le = s.length
          , b = Math.floor(le / 3);
        for (var i = 0, p, c; i < x.length; i++) {
            p = a[b],
            c = parseInt(x[i]) + b,
            a[b] = a[c],
            a[c] = p
        }
        return a.join("")
    }
    ;
    x = this.ex(x);
    a.ct = this.d(ct, x);
    a = JSON.stringify(a);
    a = MCS.ETC.decrypt(a, t, {
        format: MCSJson
    }).toString(MCS.enc.Utf8);
    a = JSON.parse(a);
    return JSON.parse(a)
};


const result =bu({n: num, e: expressCode}, PBK, PTK)


console.log(result)



const url = `https://www.51tracking.com/gettracedetail.php?lang=cn&callback=jQuery17103598517400478032_1629188333282&params=${result}&express_amazon=&track_number_orderId_ge=&pt=0&tracm=&destination=&track_account=&againtrack=&exception=0&validate=8ecb8a58dfc94d1c7f5efe6eb1972611&_=1629188333529`


// console.log(url)




// a {n: "105774F03Z98980708", e: "ups", x: "-1,5,6,8,0,-8"}

// result 

//"Z3R0d9ugY9jPidxt/1cPNM6iRAPuSZ08HwUm+K+mHooZfbwTiP+D+BIJk5WCQp1W8zFbNrgzZvgDFZZEUlsKaBuZZ65wQsADG0dTdH4VW4LiokTLtTx5vi8eISxOX8D1NIUny/+g9bmS0V6IQeY7ZwNqBugfRPbLRtygcJvn4X5mINOthlY3njNDGNKqfSRW6krScYLi4bYbGFQ5KnjBy4lWwrS4vJLAzBeFznggvVSj2IOYhUtg2w/MpwZQYSauvrR18MAaI9c5XrqqiAk9gEbMeus9gfFa21SrYrnh16Mn+LN0QeVXjpNvRqjOSaLLDPss8weNjPYkd2asfU8f1oa8J2SwnHK9LzP63qWw+8eNwNkvK3Nab00Q5ggvhiuK88G4rIL1CZEDIhscgzICGFNeqr+LFpD58JB8+wCnHUE/69kP5TolKPSlUimuR5TUixZC68zkr5uoY5Ki6lWbQQ=="
