// @title rolling_release @by msn_gf

samples('github:xen0nym/msn_gf-samples/master')
setcpm(160/4)

let chords = "<<Cm Cm7> GM <AbM AbM7> GM>"
let scales = "C:minor"

bass: n("0")
  .chord(chords).anchor("c2").mode("root").voicing()
  .s("msn_808:4").slow(2)
  .soft(.5)
  // .hard(.8)
  // .cubic(1)
  // .chebyshev(.2)
  // .asym(3)
  // .fold(1)

kick: s("msn_bd:2").struct("x(5,16)").slow(2).mask("[x ~]*2")

hh: s("msn_hh:1").struct("x(5,8,1)")
  .rarely(echo(5, -1/32, 1/3))
  .pan("[.3|.5|.7]*8")
  .postgain(.5)

snare: s("crackle").struct("[~ x]*2").adsr("0:.1:0:0")
  .density("[5|6|7]*2")
  .diode(2).room(.2).jux(early(.001))

_stomp: s("msn_st:2")
  .struct("t ~ <t t(3,8)> <t(3,8) t(5,8)>").slow(4)
  .adsr("0:0.5:0:0").hpf(200).room(.3)
  .gain(sine.range(0.5,1).slow(4).early(1)).postgain(.75)
  .almostNever(echo(3, -1/16, 1/2))


hi: "0 1 2 3".fast(2).struct("x(5,8)")
  .chunk(4, x=>x.add("<[0|2] [1|3]>"))
  .n()
  .chord(chords).anchor("g3").mode("above").voicing()
  .s("sine").fmi(3).fmh(3).fmdecay(.2).fmsustain(0)
  .room(.5).diode(saw.range(.5,2.5).slow(4)).postgain(.2)
  .jux(late(.01))
  .scramble("<1 <2 <4 8>>>")
  ._punchcard()

lo: n("[0, 2] [1, 3]").struct("x(3,8)")
  .chord(chords).anchor("c3").mode("root").voicing()
  .s("sine").fmi(saw.range(2,6).slow(4)).fmh(3).fmdecay(.15).fmsustain(0)
  .attack(.01).release(.3)
  .room(.5).postgain(.5)
  ._punchcard()
