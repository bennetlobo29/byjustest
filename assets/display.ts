// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
var arr= []
@ccclass
export default class NewClass extends cc.Component {
    
    @property(cc.Label)
    display: cc.Label = null;

    @property(cc.Label)
    label:cc.Label=null;

    lab=null
     onLoad () {
         this.node.on('touchstart',this.buttonclick,this);
     }
     
     buttonclick(){
        if(arr.length<15){
    //    var lab= this.node.getChildByName('label')
        
       var p=this.node.parent.getChildByName("Display")
       var dl=p.getChildByName("displaylabel")
       console.log(dl)
        arr.push(this.label.string)
        console.log("arr: "+arr)
        this.lab= arr.join(" ")
        this.display.string=this.lab
        dl.setPosition(-15+(dl.x),0)
       
     }
     if(this.node.name==="clear"){
        arr=[0]
        this.display.string=arr.join("")
        this.display.node.setPosition(212.659,0)
        
        if(this.node.active==true){
            arr.length=0
        }

     }
    }
    start () {

    }

    // update (dt) {}
}
