// @title 2025-10-23-breaking_waves @by msn_gf

samples('github:xen0nym/msn_gf-samples/main')
setcpm(160/4)

let chords = "<Em CM AM Bsus>"
let scales = "C:minor"

glitch: n("~!5 8").slow(8)
  .s("msn_fx").speed(-1.6)
  .gain(.6).hpf(450).room(.3)

stomp: s("msn_st:0")
  .gain("<.5 .25>").slow(4).room(.25)

bass: n("0 ~!12 <[~ 2] <1 3>>@2 ~").slow(2)
  .chord(chords).mode("above").anchor("e2").voicing()
  .s("msn_808:10").cut(2)._punchcard()

chop: s("msn_bk:10").fit()
  .slice(8, "[0 <[~@13] [1 1 ~!2 1 ~!2 1 ~!2 1 ~ 1]>@13 [~ | 1] ~]*2").delay(".3")
  // .slice(8, "[0 ~!13 [~ | 1] ~] [0 1 [[2 3 4]!4]@12 2 3]").delay(".6 0")
  .cut(1)
  .hpf(450)
  .adsr("0:.3:0:0").delayfeedback(".6").delaysync(1/16).slow(4)
  // .scramble(4)


lead: n("0 ~!12 <[~ 2] <1 3>>@2 2").slow(2)
  .chord(chords).mode("above").anchor("a2").voicing()
  .off(1/64, x=>x.add(note("12")))
  .s("folkharp")
  .hpf(600).delay(.3).delaysync(1/4).room(.3)
  ._punchcard()

gran: wrandcat([0,2],[1,1],[2,1]).fast(32).mask("x(3,8,2)").n()
  .chord(chords).mode("above").anchor("b3").voicing()
  .s("sine").fm(2).fmi(2).fmh(5)
  .adsr("0:.03:0:0")
  .pan("[.3|.7]*16")
  .gain(saw.range(.1,.9).slow(4))
  .hpf(450).delay(.3).delaysync(1/16).room(.3).postgain(slider(0.94))
  ._punchcard()


pluck: "0".echowith(3, 1/48, (x,n)=>x.add(n)).n()
    .chord(chords).mode("above").anchor("b1").voicing()
    .s("psaltery_pluck")
    .adsr("0:.5:.2:1").lpf(saw.range(1200,12000).slow(8))
    .room(.9)
    .postgain(slider(1))._pianoroll()
