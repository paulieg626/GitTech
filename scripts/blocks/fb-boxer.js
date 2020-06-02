const multiLib=require("wrapper");
const fb_boxer = multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"fb-boxer",{},{
  _output:[
[[["gittech-box",1]],null,null]
],
  _input:[
[[["gittech-ulti_raw",9]],null,3]
],
  craftTimes:[60],
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
});

fb_boxer.enableInv=false;
fb_boxer.dumpToggle=false;
fb_boxer.localizedName="Боксер";
fb_boxer.description="Делает из ульти сырья боксы";
fb_boxer.itemCapacity= 20;
fb_boxer.liquidCapacity= 0;
fb_boxer.size= 2;
fb_boxer.health= 100;
fb_boxer.craftEffect= Fx.pulverizeMedium;
fb_boxer.updateEffect=Fx.none;
fb_boxer.requirements(Category.crafting,ItemStack.with(Items.copper,50));