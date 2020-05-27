const lib=require("library");
module.exports={
  extend(Type,Entity,name,def,recipes){
    const block=Object.create(lib.body);
    const rec=JSON.parse(JSON.stringify(recipes));
    Object.assign(block,def,rec);
    const multi=extendContent(Type,name,block);
    multi.entityType=prov(()=>extend(GenericCrafter.GenericCrafterEntity,{
      modifyToggle(a){
        this._toggle=a;
      },
      getToggle(){
        return this._toggle;
      },
      _toggle:0,
      saveProgress(c,d){
        this._progressArr[c]=d;
      },
      getProgress(e){
        return this._progressArr[e];
      },
      _progressArr:[],
      saveCond(f){
        this._cond=f;
      },
      getCond(){
        return this._cond;
      },
      _cond:false,
      setPowerStat(g){
        this._powerStat=g;
      },
      getPowerStat(){
        return this._powerStat;
      },
      _powerStat:0,
      getItemStat(){
        return this._itemStat;
      },
      _itemStat:[],
    }));
    multi.consumes.add(extend(ConsumePower,{
      requestedPower(entity){
        if(entity.tile.entity==null){
          return 0;
        }
        for(var i=0;i<multi.input.length;i++){
          if(entity.tile.entity.getToggle()==i&&multi.input[i][2]!=null&&entity.tile.entity.getCond()){
            return multi.input[i][2];
          }
        }
        return 0;
      }
    }));
    multi.configurable=true;
    multi.hasItems=true;
    multi.hasLiquids=true;
    multi.hasPower=true;
    return multi;
  }
}