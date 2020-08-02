const peat_f=extendContent(GenericCrafter,"peat-f", {
drawLayer(tile){
Draw.rect(this.name+"-rotator", tile.drawx(),tile.drawy(),tile.entity.totalProgress*10+10);
}});
peat_f.layer = Layer.turret;