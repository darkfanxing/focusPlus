console.log("QQ")



// 讀取API

url = "http://localhost:13523/getImg"
data = fetch(url)
            .then(function(response) {
                data = response.json().then(function(data){
                    $.getJSON(data.filename, function(json) { // 讀取本地 Json 檔案，裡面可以有任意物件
                        console.log(json);
                    });
                    
                })
            })