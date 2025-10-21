// @title 2025-10-21-degrade_me @by msn_gf

samples('github:xen0nym/msn_gf-samples/main')
setcpm(160/4)

let chords = "<<Cm Cm7> <GM Fm> <AbM7 AbM> GM>"
let scales = "C:minor"

_spin: n("<~!7 t>").s("msn_bs:2")
  .struct("~!3 t").speed(-2)
  .gain(.2).hpf(450).room(.5)

_stomp: s("msn_st:2").slow(4)
  .gain("<.5!4 .25!4>").room(.25)

_think: s("msn_bk:7")
  .fit().chop(8).cut(1).rarely(ply("2"))
  .bpf(slider(1000,1000,3000,10)).gain(2)
  .adsr("0:.1:0:0").postgain(slider(0))

_$: n("0").euclid(slider(1,1,16,1),16).slow(2).layer(
  x=>x.s("msn_bd:1").mask("[t ~]*2")
    .degradeBy(slider(0,0,1,.1)),
  x=>x.s("msn_sd:0").mask("[~ t]*2")
    .degradeBy(slider(0,0,1,.1)).rarely(echo(3, -1/16, 1/2)),
  x=>x.s("msn_hh:4").mask("[t!2 ~ t]*2").sometimes(ply(2))
    .degradeBy(slider(0,0,1,.1))
    .gain(.3),
)
._punchcard()
._scope()

lead: n("<0> ~!12 <[~ 2] <1@2 !2>>@2 2").slow(2)
  .chord(chords).mode("above").anchor("a2").voicing()
  .off(1/64, x=>x.add(note("12")))
  .s("folkharp")
  .hpf(600).delay(.3).delaysync(1/4).room(.3)
  ._punchcard()
  ._scope()

_$: n("0").euclid(slider(1,1,16,1),16).slow(2).layer(
  x=>x.n("0, 1, 2, 3")
    .chord(chords).mode("above").anchor("a3").voicing()
    .s("sine").mask("t!2 ~ t")
    .degradeBy(slider(0,0,1,.1))
    .adsr(".05:.15:0:0").distort("4:.1").lpf(saw.range(200,1000).slow(4)).room(.9)
    .postgain(slider(0)),
  x=>x.degradeBy(slider(0,0,1,.1)).echo(4,1/16,1/2)
    .n("[0 2 1 3]*4")
    .chord(chords).mode("above").anchor("a5").voicing()
    .s("sine")
    .adsr("0:.1:0:0").coarse("4").room(.4)
    .postgain(slider(0)),
  x=>x.n("<0!2 <0 5> 4>").scale(scales).scaleTrans(-7)
    .s("sine").mask("t!2 ~ t")
    .degradeBy(slider(0,0,1,.1))
    .adsr(".05:.1:.5:.25").cut(2).distort("3:.6")
)
._punchcard()
._scope()

// try:
// euclidish
// morph
// beat
