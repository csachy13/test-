class Yums {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Yum",
            "name": "Yum",
            "blocks": [
                {
                    "opcode": "addTwo",
                    "blockType": "reporter",
                    "text": "2 + [str]",
                    "arguments": {
                        "str": {
                            "type": "string",
                            "defaultValue": "Hello , World!"
                        }
                    }
                }
            ]
        }
    }

    /* add methods for blocks */

    addTwo({str}) {
        return str + 2
    }
}
Scratch.extensions.register(new Yums())
