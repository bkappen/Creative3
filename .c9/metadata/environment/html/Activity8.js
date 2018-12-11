{"changed":true,"filter":false,"title":"Activity8.js","tooltip":"/html/Activity8.js","value":"var app = angular.module('myApp', []);\napp.controller('myCtrl', function($scope, $http) \n{\n    $scope.cities = [];\n    $scope.onup = function(form) {\n        var url = \"http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=\" + form;\n        $http.get(url).then(function(response) \n        {\n            $scope.cities = response.data;\n        });\n        url = \"https://api.github.com/users/mjcleme\";\n        $http.get(url).then(function(response)\n        {\n           $scope.gitstuff = response;\n        });\n    }\n});\n","undoManager":{"mark":62,"position":100,"stack":[[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["c"],"id":58},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["o"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["n"]},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["s"]},{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":["o"]},{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["l"]},{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":["e"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":["."]},{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":["l"]},{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["o"]},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["g"]}],[{"start":{"row":5,"column":18},"end":{"row":5,"column":20},"action":"insert","lines":["()"],"id":59}],[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["f"],"id":60},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["o"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["r"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["m"]}],[{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":[";"],"id":61}],[{"start":{"row":5,"column":25},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":62},{"start":{"row":6,"column":0},"end":{"row":6,"column":7},"action":"insert","lines":["       "]}],[{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"remove","lines":[" "],"id":63},{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"remove","lines":[" "]},{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"remove","lines":[" "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "]},{"start":{"row":5,"column":25},"end":{"row":6,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":5,"column":25},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":64},{"start":{"row":6,"column":0},"end":{"row":6,"column":7},"action":"insert","lines":["       "]},{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["v"]},{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["a"]},{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["r"]}],[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":[" "],"id":65},{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["i"]}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"remove","lines":["i"],"id":66}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["u"],"id":67},{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["r"]},{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["l"]}],[{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":[" "],"id":68},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":[" "],"id":69}],[{"start":{"row":6,"column":17},"end":{"row":6,"column":19},"action":"insert","lines":["\"\""],"id":70}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["h"],"id":71},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["t"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["t"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["p"]},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":[":"]},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["/"]},{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["/"]},{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["b"]}],[{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["i"],"id":72},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["o"]},{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["r"]},{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"insert","lines":["e"]},{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["s"]},{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["e"]},{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":["a"]},{"start":{"row":6,"column":33},"end":{"row":6,"column":34},"action":"insert","lines":["r"]},{"start":{"row":6,"column":34},"end":{"row":6,"column":35},"action":"insert","lines":["c"]},{"start":{"row":6,"column":35},"end":{"row":6,"column":36},"action":"insert","lines":["h"]},{"start":{"row":6,"column":36},"end":{"row":6,"column":37},"action":"insert","lines":["."]},{"start":{"row":6,"column":37},"end":{"row":6,"column":38},"action":"insert","lines":["b"]},{"start":{"row":6,"column":38},"end":{"row":6,"column":39},"action":"insert","lines":["y"]},{"start":{"row":6,"column":39},"end":{"row":6,"column":40},"action":"insert","lines":["u"]}],[{"start":{"row":6,"column":40},"end":{"row":6,"column":41},"action":"insert","lines":["."],"id":73},{"start":{"row":6,"column":41},"end":{"row":6,"column":42},"action":"insert","lines":["e"]},{"start":{"row":6,"column":42},"end":{"row":6,"column":43},"action":"insert","lines":["d"]},{"start":{"row":6,"column":43},"end":{"row":6,"column":44},"action":"insert","lines":["u"]},{"start":{"row":6,"column":44},"end":{"row":6,"column":45},"action":"insert","lines":["/"]},{"start":{"row":6,"column":45},"end":{"row":6,"column":46},"action":"insert","lines":["s"]}],[{"start":{"row":6,"column":45},"end":{"row":6,"column":46},"action":"remove","lines":["s"],"id":74}],[{"start":{"row":6,"column":45},"end":{"row":6,"column":46},"action":"insert","lines":["c"],"id":75},{"start":{"row":6,"column":46},"end":{"row":6,"column":47},"action":"insert","lines":["s"]},{"start":{"row":6,"column":47},"end":{"row":6,"column":48},"action":"insert","lines":["2"]},{"start":{"row":6,"column":48},"end":{"row":6,"column":49},"action":"insert","lines":["6"]},{"start":{"row":6,"column":49},"end":{"row":6,"column":50},"action":"insert","lines":["0"]}],[{"start":{"row":6,"column":50},"end":{"row":6,"column":51},"action":"insert","lines":["/"],"id":76},{"start":{"row":6,"column":51},"end":{"row":6,"column":52},"action":"insert","lines":["j"]},{"start":{"row":6,"column":52},"end":{"row":6,"column":53},"action":"insert","lines":["q"]},{"start":{"row":6,"column":53},"end":{"row":6,"column":54},"action":"insert","lines":["u"]},{"start":{"row":6,"column":54},"end":{"row":6,"column":55},"action":"insert","lines":["e"]},{"start":{"row":6,"column":55},"end":{"row":6,"column":56},"action":"insert","lines":["r"]},{"start":{"row":6,"column":56},"end":{"row":6,"column":57},"action":"insert","lines":["y"]}],[{"start":{"row":6,"column":57},"end":{"row":6,"column":58},"action":"insert","lines":["/"],"id":77},{"start":{"row":6,"column":58},"end":{"row":6,"column":59},"action":"insert","lines":["g"]},{"start":{"row":6,"column":59},"end":{"row":6,"column":60},"action":"insert","lines":["e"]},{"start":{"row":6,"column":60},"end":{"row":6,"column":61},"action":"insert","lines":["t"]},{"start":{"row":6,"column":61},"end":{"row":6,"column":62},"action":"insert","lines":["c"]},{"start":{"row":6,"column":62},"end":{"row":6,"column":63},"action":"insert","lines":["i"]},{"start":{"row":6,"column":63},"end":{"row":6,"column":64},"action":"insert","lines":["t"]},{"start":{"row":6,"column":64},"end":{"row":6,"column":65},"action":"insert","lines":["y"]}],[{"start":{"row":6,"column":65},"end":{"row":6,"column":66},"action":"insert","lines":["."],"id":78},{"start":{"row":6,"column":66},"end":{"row":6,"column":67},"action":"insert","lines":["c"]},{"start":{"row":6,"column":67},"end":{"row":6,"column":68},"action":"insert","lines":["g"]},{"start":{"row":6,"column":68},"end":{"row":6,"column":69},"action":"insert","lines":["i"]}],[{"start":{"row":6,"column":69},"end":{"row":6,"column":70},"action":"insert","lines":["?"],"id":79},{"start":{"row":6,"column":70},"end":{"row":6,"column":71},"action":"insert","lines":["q"]},{"start":{"row":6,"column":71},"end":{"row":6,"column":72},"action":"insert","lines":["="]}],[{"start":{"row":6,"column":73},"end":{"row":6,"column":74},"action":"insert","lines":[" "],"id":80},{"start":{"row":6,"column":74},"end":{"row":6,"column":75},"action":"insert","lines":["+"]}],[{"start":{"row":6,"column":75},"end":{"row":6,"column":76},"action":"insert","lines":[" "],"id":81},{"start":{"row":6,"column":76},"end":{"row":6,"column":77},"action":"insert","lines":["f"]},{"start":{"row":6,"column":77},"end":{"row":6,"column":78},"action":"insert","lines":["o"]},{"start":{"row":6,"column":78},"end":{"row":6,"column":79},"action":"insert","lines":["r"]},{"start":{"row":6,"column":79},"end":{"row":6,"column":80},"action":"insert","lines":["m"]}],[{"start":{"row":6,"column":80},"end":{"row":6,"column":81},"action":"insert","lines":[";"],"id":82}],[{"start":{"row":6,"column":81},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":83},{"start":{"row":7,"column":0},"end":{"row":7,"column":7},"action":"insert","lines":["       "]}],[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["$"],"id":84},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["h"]},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["t"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["t"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["p"]}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["."],"id":85},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["g"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["e"]},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["t"]}],[{"start":{"row":7,"column":16},"end":{"row":7,"column":18},"action":"insert","lines":["()"],"id":86}],[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["r"],"id":87},{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["u"]}],[{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"remove","lines":["u"],"id":88},{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"remove","lines":["r"]}],[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["u"],"id":89},{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["r"]},{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["l"]}],[{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["."],"id":90},{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"insert","lines":["t"]},{"start":{"row":7,"column":23},"end":{"row":7,"column":24},"action":"insert","lines":["h"]},{"start":{"row":7,"column":24},"end":{"row":7,"column":25},"action":"insert","lines":["e"]},{"start":{"row":7,"column":25},"end":{"row":7,"column":26},"action":"insert","lines":["n"]}],[{"start":{"row":7,"column":26},"end":{"row":7,"column":28},"action":"insert","lines":["()"],"id":91}],[{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"insert","lines":["f"],"id":92},{"start":{"row":7,"column":28},"end":{"row":7,"column":29},"action":"insert","lines":["u"]},{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"insert","lines":["n"]},{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"insert","lines":["c"]},{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"insert","lines":["t"]},{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"insert","lines":["i"]},{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"insert","lines":["o"]},{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"insert","lines":["n"]}],[{"start":{"row":7,"column":35},"end":{"row":7,"column":37},"action":"insert","lines":["()"],"id":93}],[{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"insert","lines":["r"],"id":94},{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"insert","lines":["e"]},{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"insert","lines":["s"]},{"start":{"row":7,"column":39},"end":{"row":7,"column":40},"action":"insert","lines":["p"]},{"start":{"row":7,"column":40},"end":{"row":7,"column":41},"action":"insert","lines":["o"]},{"start":{"row":7,"column":41},"end":{"row":7,"column":42},"action":"insert","lines":["n"]},{"start":{"row":7,"column":42},"end":{"row":7,"column":43},"action":"insert","lines":["s"]},{"start":{"row":7,"column":43},"end":{"row":7,"column":44},"action":"insert","lines":["e"]}],[{"start":{"row":7,"column":46},"end":{"row":7,"column":47},"action":"insert","lines":[";"],"id":95}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"remove","lines":[")"],"id":96}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":[")"],"id":97}],[{"start":{"row":7,"column":45},"end":{"row":7,"column":47},"action":"insert","lines":["{}"],"id":98}],[{"start":{"row":7,"column":46},"end":{"row":9,"column":7},"action":"insert","lines":["","           ","       "],"id":99}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":["$"],"id":100},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["s"]},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["c"]},{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["o"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["p"]},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["e"]},{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["."]},{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["c"]},{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["i"]},{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["t"]},{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["i"]},{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":["e"]},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["s"]}],[{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"insert","lines":[" "],"id":101},{"start":{"row":8,"column":25},"end":{"row":8,"column":26},"action":"insert","lines":["="]}],[{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"insert","lines":[" "],"id":102},{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":["r"]},{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":["e"]},{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"insert","lines":["s"]},{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"insert","lines":["p"]},{"start":{"row":8,"column":31},"end":{"row":8,"column":32},"action":"insert","lines":["o"]},{"start":{"row":8,"column":32},"end":{"row":8,"column":33},"action":"insert","lines":["n"]},{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"insert","lines":["s"]},{"start":{"row":8,"column":34},"end":{"row":8,"column":35},"action":"insert","lines":["e"]}],[{"start":{"row":8,"column":35},"end":{"row":8,"column":36},"action":"insert","lines":[";"],"id":103}],[{"start":{"row":8,"column":9},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":104},{"start":{"row":9,"column":0},"end":{"row":9,"column":9},"action":"insert","lines":["         "]}],[{"start":{"row":8,"column":9},"end":{"row":8,"column":12},"action":"insert","lines":["   "],"id":105}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":12},"action":"remove","lines":["    "],"id":106},{"start":{"row":8,"column":4},"end":{"row":8,"column":8},"action":"remove","lines":["    "]}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":8},"action":"insert","lines":["    "],"id":107}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":12},"action":"insert","lines":["    "],"id":108}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["c"],"id":109},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["o"]},{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["n"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["s"]},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["i"]},{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["l"]}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"remove","lines":["l"],"id":110},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"remove","lines":["i"]}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["o"],"id":111},{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["l"]},{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["e"]},{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["."]},{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["l"]},{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["o"]},{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":["g"]}],[{"start":{"row":8,"column":23},"end":{"row":8,"column":25},"action":"insert","lines":["()"],"id":112}],[{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"insert","lines":["r"],"id":113},{"start":{"row":8,"column":25},"end":{"row":8,"column":26},"action":"insert","lines":["e"]},{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"insert","lines":["s"]},{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":["p"]},{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":["o"]},{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"insert","lines":["n"]},{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"insert","lines":["s"]},{"start":{"row":8,"column":31},"end":{"row":8,"column":32},"action":"insert","lines":["e"]}],[{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"insert","lines":[";"],"id":114}],[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":[" "],"id":115},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":[" "]},{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"insert","lines":[" "]},{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":[" "]},{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["{"]},{"start":{"row":4,"column":1},"end":{"row":5,"column":0},"action":"remove","lines":["  {",""]},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":[" "]},{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":[" "]},{"start":{"row":6,"column":46},"end":{"row":6,"column":47},"action":"insert","lines":[" "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":[" "]},{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"insert","lines":[" "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"insert","lines":[" "]},{"start":{"row":11,"column":3},"end":{"row":12,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":6,"column":47},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":116},{"start":{"row":7,"column":0},"end":{"row":7,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":1,"column":49},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":117}],[{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"insert","lines":["."],"id":118},{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"insert","lines":["d"]},{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"insert","lines":["a"]},{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"insert","lines":["t"]},{"start":{"row":10,"column":40},"end":{"row":10,"column":41},"action":"insert","lines":["a"]}],[{"start":{"row":8,"column":9},"end":{"row":9,"column":34},"action":"remove","lines":["","            console.log(response);"],"id":119}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":26},"action":"remove","lines":["        console.log(form);"],"id":120},{"start":{"row":4,"column":34},"end":{"row":5,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":11},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":121},{"start":{"row":10,"column":0},"end":{"row":10,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["v"],"id":122},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["a"]},{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":[" "],"id":123}],[{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"remove","lines":[" "],"id":124},{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"remove","lines":["r"]},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"remove","lines":["a"]},{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"remove","lines":["v"]}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["u"],"id":125},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["r"]},{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["l"]}],[{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":[" "],"id":126},{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["="]}],[{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"insert","lines":[" "],"id":127}],[{"start":{"row":10,"column":14},"end":{"row":10,"column":16},"action":"insert","lines":["\"\""],"id":128}],[{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"insert","lines":["h"],"id":129},{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":["t"]},{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"insert","lines":["t"]},{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":["p"]},{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["s"]},{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":[":"]},{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["/"]}],[{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["/"],"id":130},{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"insert","lines":["a"]},{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"insert","lines":["p"]},{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"insert","lines":["i"]}],[{"start":{"row":10,"column":26},"end":{"row":10,"column":27},"action":"insert","lines":["."],"id":131},{"start":{"row":10,"column":27},"end":{"row":10,"column":28},"action":"insert","lines":["g"]},{"start":{"row":10,"column":28},"end":{"row":10,"column":29},"action":"insert","lines":["i"]},{"start":{"row":10,"column":29},"end":{"row":10,"column":30},"action":"insert","lines":["t"]},{"start":{"row":10,"column":30},"end":{"row":10,"column":31},"action":"insert","lines":["h"]},{"start":{"row":10,"column":31},"end":{"row":10,"column":32},"action":"insert","lines":["u"]},{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"insert","lines":["b"]}],[{"start":{"row":10,"column":33},"end":{"row":10,"column":34},"action":"insert","lines":["."],"id":132},{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"insert","lines":["c"]},{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"insert","lines":["o"]},{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"insert","lines":["m"]},{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"insert","lines":["/"]},{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"insert","lines":["u"]},{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"insert","lines":["s"]},{"start":{"row":10,"column":40},"end":{"row":10,"column":41},"action":"insert","lines":["e"]},{"start":{"row":10,"column":41},"end":{"row":10,"column":42},"action":"insert","lines":["r"]},{"start":{"row":10,"column":42},"end":{"row":10,"column":43},"action":"insert","lines":["s"]},{"start":{"row":10,"column":43},"end":{"row":10,"column":44},"action":"insert","lines":["/"]}],[{"start":{"row":10,"column":44},"end":{"row":10,"column":45},"action":"insert","lines":["m"],"id":133},{"start":{"row":10,"column":45},"end":{"row":10,"column":46},"action":"insert","lines":["j"]},{"start":{"row":10,"column":46},"end":{"row":10,"column":47},"action":"insert","lines":["c"]},{"start":{"row":10,"column":47},"end":{"row":10,"column":48},"action":"insert","lines":["l"]},{"start":{"row":10,"column":48},"end":{"row":10,"column":49},"action":"insert","lines":["e"]},{"start":{"row":10,"column":49},"end":{"row":10,"column":50},"action":"insert","lines":["m"]},{"start":{"row":10,"column":50},"end":{"row":10,"column":51},"action":"insert","lines":["e"]}],[{"start":{"row":10,"column":52},"end":{"row":10,"column":53},"action":"insert","lines":[";"],"id":134}],[{"start":{"row":10,"column":53},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":135},{"start":{"row":11,"column":0},"end":{"row":11,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["$"],"id":136},{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["h"]},{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":["t"]},{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["t"]},{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["p"]},{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["."]},{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["g"]},{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["e"]}],[{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["t"],"id":137}],[{"start":{"row":11,"column":17},"end":{"row":11,"column":19},"action":"insert","lines":["()"],"id":138}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["u"],"id":139},{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":["r"]},{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["l"]}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":["."],"id":140},{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"insert","lines":["t"]},{"start":{"row":11,"column":24},"end":{"row":11,"column":25},"action":"insert","lines":["h"]},{"start":{"row":11,"column":25},"end":{"row":11,"column":26},"action":"insert","lines":["e"]},{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"insert","lines":["n"]}],[{"start":{"row":11,"column":27},"end":{"row":11,"column":29},"action":"insert","lines":["()"],"id":141}],[{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"insert","lines":["f"],"id":142},{"start":{"row":11,"column":29},"end":{"row":11,"column":30},"action":"insert","lines":["u"]},{"start":{"row":11,"column":30},"end":{"row":11,"column":31},"action":"insert","lines":["n"]},{"start":{"row":11,"column":31},"end":{"row":11,"column":32},"action":"insert","lines":["c"]},{"start":{"row":11,"column":32},"end":{"row":11,"column":33},"action":"insert","lines":["t"]},{"start":{"row":11,"column":33},"end":{"row":11,"column":34},"action":"insert","lines":["i"]},{"start":{"row":11,"column":34},"end":{"row":11,"column":35},"action":"insert","lines":["o"]},{"start":{"row":11,"column":35},"end":{"row":11,"column":36},"action":"insert","lines":["n"]}],[{"start":{"row":11,"column":36},"end":{"row":11,"column":38},"action":"insert","lines":["()"],"id":143}],[{"start":{"row":11,"column":37},"end":{"row":11,"column":38},"action":"insert","lines":["f"],"id":144}],[{"start":{"row":11,"column":37},"end":{"row":11,"column":38},"action":"remove","lines":["f"],"id":145}],[{"start":{"row":11,"column":37},"end":{"row":11,"column":38},"action":"insert","lines":["r"],"id":146},{"start":{"row":11,"column":38},"end":{"row":11,"column":39},"action":"insert","lines":["e"]},{"start":{"row":11,"column":39},"end":{"row":11,"column":40},"action":"insert","lines":["s"]},{"start":{"row":11,"column":40},"end":{"row":11,"column":41},"action":"insert","lines":["p"]},{"start":{"row":11,"column":41},"end":{"row":11,"column":42},"action":"insert","lines":["o"]},{"start":{"row":11,"column":42},"end":{"row":11,"column":43},"action":"insert","lines":["n"]},{"start":{"row":11,"column":43},"end":{"row":11,"column":44},"action":"insert","lines":["s"]},{"start":{"row":11,"column":44},"end":{"row":11,"column":45},"action":"insert","lines":["e"]}],[{"start":{"row":11,"column":46},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":147},{"start":{"row":12,"column":0},"end":{"row":12,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":12,"column":8},"end":{"row":12,"column":10},"action":"insert","lines":["{}"],"id":148}],[{"start":{"row":12,"column":9},"end":{"row":14,"column":8},"action":"insert","lines":["","            ","        "],"id":149}],[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":[";"],"id":150}],[{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":["$"],"id":151},{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":["s"]},{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":["c"]},{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"insert","lines":["o"]},{"start":{"row":13,"column":15},"end":{"row":13,"column":16},"action":"insert","lines":["p"]},{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":["e"]},{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["."]},{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["g"]}],[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["i"],"id":152},{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":["t"]},{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"insert","lines":["s"]},{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":["t"]},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["u"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["f"]},{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"insert","lines":["f"]}],[{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"insert","lines":[" "],"id":153},{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"insert","lines":["="]}],[{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"insert","lines":[" "],"id":154},{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"insert","lines":["r"]},{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"insert","lines":["e"]},{"start":{"row":13,"column":31},"end":{"row":13,"column":32},"action":"insert","lines":["s"]},{"start":{"row":13,"column":32},"end":{"row":13,"column":33},"action":"insert","lines":["p"]},{"start":{"row":13,"column":33},"end":{"row":13,"column":34},"action":"insert","lines":["o"]},{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"insert","lines":["n"]},{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"insert","lines":["e"]},{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"insert","lines":["s"]}],[{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"remove","lines":["s"],"id":155},{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"remove","lines":["e"]}],[{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"insert","lines":["s"],"id":156},{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"insert","lines":["e"]},{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"insert","lines":[";"]}],[{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"remove","lines":[" "],"id":157},{"start":{"row":13,"column":38},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":11},"action":"insert","lines":["           "]}],[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"remove","lines":[" "],"id":158},{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"remove","lines":[" "]},{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"remove","lines":[" "]},{"start":{"row":14,"column":4},"end":{"row":14,"column":8},"action":"remove","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"remove","lines":["    "]},{"start":{"row":13,"column":38},"end":{"row":14,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":38},"end":{"row":13,"column":38},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1539203355006}