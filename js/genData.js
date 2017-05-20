function genData() {
    var json = {
        "someData": [
            {
                "serviceName": "SVC",
                "businessAreaName": "SAMPLEBA",
                "workType": "SAMPLEWT",
                "statusName": "CREATED",
                "step": "Start",
                "errorMessage": "bad error thats right"
            }
        ]
    };
    for (var i = 0; i < 300; i++) {
        json.someData[i] = {
            "serviceName": "SVC" + i,
            "businessAreaName": "SAMPLEBA" + i,
            "workType": "SAMPLEWT" + i,
            "statusName": "CREATED" + i,
            "step": "Start" + i,
            "errorMessage": "bad error thats right" + i
        };
    }
    console.log(JSON.stringify(json));
}