// @title rolling_release @by msn_gf

samples('github:xen0nym/msn_gf-samples/master')
setcpm(160/4)

let chords = "<<Cm Cm7> GM <AbM AbM7> GM>"
let scales = "c:minor"

bass: n("0")
  .chord(chords).anchor("c3").mode("root").voicing()
  .s("msn_808:4").slow(2)
  // .hard(.8)
  // .soft(.5)
  // .cubic(1)
  // .chebyshev(.2)
  // .asym(2)
  .fold(1)

_hh: s("msn_hh:1").struct("x(5,8)").scramble(4)

noise: s("crackle").struct("x(3,8)")
  .density("[2|4|6]*8").pan("[.25|.5|.75]*8")
  .fast(2).scramble(4).diode(1).room(.3)

stomp: s("msn_st:2")
  .struct("t ~ <t t(3,8)> <t(3,8) t(5,8)>").slow(4)
  .adsr("0:0.5:0:0").hpf(150).room(.3)
  .gain(sine.range(0.5,1).slow(4).early(1)).postgain(.75)
  ._punchcard()

hi: "0 1 2 3".fast(2).struct("x(5,8)").chunk(3, x=>x.add(2)).n()
  .chord(chords).anchor("g4").mode("above").voicing()
  .s("sine").fmi(2).fmh(3).fmdecay(.2).fmsustain(0)
  .room(.5).diode(saw.range(.5,2.5).slow(4)).postgain(.2)
  .jux(late(.01))
  ._punchcard()

lo: n("[0, 2] [1, 3]").chunk(4, x=>x.add(7)).struct("x(3,8)")
  .chord(chords).anchor("c3").mode("root").voicing()
  .s("sine").fmi(4).fmh(3).fmdecay(.2).fmsustain(0)
  .attack(.02).release(.3)
  .room(.5).postgain(.5)
  ._punchcard()