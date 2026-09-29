// Task Sheet PSD builder — uses USER-PROVIDED sliced assets only
// Run in Photoshop: File > Scripts > Browse... (this file)
// Slices must be in the same folder (slice_*.png)

#target photoshop
app.displayDialogs = DialogModes.NO;
function cT(v){return UnitValue(v,"px");}
function hexColor(hx){var c=new SolidColor();c.rgb.red=parseInt(hx.substr(1,2),16);c.rgb.green=parseInt(hx.substr(3,2),16);c.rgb.blue=parseInt(hx.substr(5,2),16);return c;}
function addPlace(name,file,x,y,w,h){
  var f=new File(File($.fileName).parent+"/"+file);
  if(!f.exists){alert("missing "+file);return null;}
  var d=app.open(f); d.activeLayer.copy();
  app.activeDocument=doc; doc.paste();
  var ly=doc.activeLayer; ly.name=name;
  var b=ly.bounds;
  var sw=b[2].as("px")-b[0].as("px"), sh=b[3].as("px")-b[1].as("px");
  if(w&&h){ ly.resize((w/sw)*100,(h/sh)*100,AnchorPosition.MIDDLECENTER); }
  var b2=ly.bounds; ly.translate(x-b2[0].as("px"), y-b2[1].as("px"));
  try{d.close(SaveOptions.DONOTSAVECHANGES);}catch(e){}
  return ly;
}
function addText(name,txt,x,y,size,hex,bold){
  var ly=doc.artLayers.add(); ly.kind=LayerKind.TEXT;
  var ti=ly.textItem; ti.name=name; ti.contents=txt; ti.kind=TextType.POINTTEXT;
  ti.position=[cT(x),cT(y)]; ti.size=cT(size); ti.font=bold?"MicrosoftYaHei-Bold":"MicrosoftYaHei";
  ti.color=hexColor(hex); return ly;
}
var docW=750, docH=1626;
doc=app.documents.add(docW,docH,72,"tasksheet-375x812",NewDocumentMode.RGB,DocumentFill.TRANSPARENT);

// L0 background (user bg slice, scaled to full doc)
addPlace("L0_bg_home_dim","slice_bg_home.png",0,0,docW,docH);

// L2 UI panel (user panel slice) — spans right/full width bottom area per user's panel design
// Panel slice includes mascot+header+rows+footer as user composed. Place full width bottom.
addPlace("L2_ui_panel","slice_panel.png",12,760,726,870);

// L3 text layers (editable) positioned over panel header — panel slice already contains text;
// These are OPTIONAL text layers, hidden by default to avoid duplicates:
var t1=addText("L3_title_editable","做任务得能量!",60,1035,44,"#4A2A2A",true); t1.visible=false;
var t2=addText("L3_energy_editable","今日剩余能量： 86",60,1105,30,"#4A2A2A",true); t2.visible=false;

// L4 top bar icons
addPlace("L4_icon_back","slice_icon_back.png",60,110,120,120);
addPlace("L4_icon_help","slice_icon_help.png",570,110,120,120);

// (Panel slice already includes 4 row icons & buttons; we ALSO place standalone sliced buttons/icons as reusable layers hidden by default)
var g=doc.layerSets.add(); g.name="reusable_slices";
var bk=addPlace("btn_go_qiandao","slice_btn_1.png",0,0,200,80); bk.move(g,ElementPlacement.INSIDE); bk.visible=false;
var bg=addPlace("btn_go_guankan","slice_btn_2.png",0,0,200,80); bg.move(g,ElementPlacement.INSIDE); bg.visible=false;
var by=addPlace("btn_go_yaoqing","slice_btn_3.png",0,0,200,80); by.move(g,ElementPlacement.INSIDE); by.visible=false;
var bk2=addPlace("btn_go_kankan","slice_btn_4.png",0,0,200,80); bk2.move(g,ElementPlacement.INSIDE); bk2.visible=false;
var i1=addPlace("icon_calendar","slice_icon_calendar.png",0,0,130,130); i1.move(g,ElementPlacement.INSIDE); i1.visible=false;
var i2=addPlace("icon_video","slice_icon_video.png",0,0,130,130); i2.move(g,ElementPlacement.INSIDE); i2.visible=false;
var i3=addPlace("icon_people","slice_icon_people.png",0,0,130,130); i3.move(g,ElementPlacement.INSIDE); i3.visible=false;
var i4=addPlace("icon_crystal","slice_icon_crystal.png",0,0,130,130); i4.move(g,ElementPlacement.INSIDE); i4.visible=false;

var psd=new File(File($.fileName).parent+"/tasksheet-375x812.psd");
doc.saveAs(psd,new PhotoshopSaveOptions(),true,Extension.LOWERCASE);
alert("PSD saved: "+psd.fsName);
