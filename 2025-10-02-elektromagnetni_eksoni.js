// @title 2025-10-02-elektromagnetni_eksoni @by msn_gf

samples('github:xen0nym/msn_gf-samples/main')
setcpm(140/4)

let scales = "A:minor"
let chords = "<Am!3 B->/2"
// const chords = "<Am!2 B- CM>/2"
// const chords = "<Am9 GM F#m7b5 CM7#11>/2"
// const chords = "<Am B- CM <Em G>>/2"

_piano:
  // note("<a5>")
  n("0([7|9|11],16)")
    .chord(chords).mode("root:c6").voicing()
    .s("piano").adsr("0:1:0:0")
    .gain(.4).room(".1")
    // .delay("<0!3 .5>")

_harp:
  n("[0 1 2 -] -@15")
    .chord(chords).mode("above:a3").voicing()
    .s("folkharp")//.adsr("0:1:.5:1")
    .gain(.3).room(.1)

_arp:
  stack(
    n("[0 2 1]*4")
      .chord(chords).mode("above:a5").voicing()
      .gain("[.75 .25!2]*4")
      .pan("[.25|.75]*16"),
    n("0*12").chord(chords).mode("above:a4").voicing()
      .gain("[.5 .25!5]*2")
  )
    .s("sine").adsr(".01:.06:0:0")
    .coarse(4).room(.1).postgain(.5)

_choir:
  n("[0,2,4] [1,3,5]")
    .chord(chords).mode("duck:a5").voicing()
    .struct("[x(9,16)!3 x(11,16)]/4")
    .s("gm_choir_aahs").adsr("0:0:1:0").clip(.75)
    .gain(.5).room(.5)
    .orbit(2)

_saturday_love:
  s("msn_vox_loop:3/8").fit()
    .chop(64).cut(1).speed(.25)
    .sometimes(ply("4")).swing(16)
    // .velocity("[1 .5!7]")
    .gain(.25).room(.1)

_xxl_freestyle:
  s("msn_vox_loop:5/28").fit()
    .slice(28, "<1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24>")
    .cut(1)
    // .sometimes(ply("[[4|8] 1]*2"))
    // .crush(16)
    // .compressor("-40:40:1:.001:.001")
    .coarse(3).hpf(sine.range(1500,3000).slow(4)).gain(.3).room(.1).delay("<.1!7 .3>")
    .orbit(2)

_click:
  note("a4")
    .s("sine").adsr("0:.01:0:0")
    .struct("x*8")
    .rarely(ply(2)).swing(8)
    .crush(4).gain(.3)
    .orbit(2)

_burst:
  s("white").adsr("0:0:1:0")
    .struct("[-!15 x]/4")
    .bpf(3000)

_beep1:
  note("a6")
    .s("sine").fm("6").adsr("0:0:1:0").clip(.5)
    .struct("[-!4 x -!3 -!6 x -!1]/2")
    .bpf(1000).gain(.5).room(.2)

_beep2:
  note("g6")
    .s("sine").fm("8").adsr("0:0:1:0").clip(.75)
    .struct("<- [-!5 x - x -!8]>/2")
    .bpf(1000).gain(.5).room(.6)
    .pan("[.25|.75]*16")

_beep3:
  note("c6").fm("4").s("sine").adsr("0:0:1:0").clip(.25)
    .struct("[-!5 x -!2]*0.75")
    .bpf(1000).gain(.25).room(.9)

_snare:
  s("msn_sd:4").adsr("0:0.1:0:0")
    .struct("<[- x]!3 [[-!3 x*2]|[- x - x]]>*2")
    .speed(3).rarely(x=>x.delay(.2))
    .gain(.3).room(.02)

_bass:
  n("0")
    .note("a1")
    // .struct("x -!4 x -!2")
    // .struct("<x(9,16)!3 x(11,16)>")
    .chord(chords).mode("root:g2").voicing()
    .adsr("0:0:1:0").clip(.75).cut(4)
    .layer(
      x=>x.s("sine"),
      x=>x.s("pink").velocity(.01),
      x=>x.s("sine").add(note(64)).velocity(.01).room(0)
    )
    .distort(1.5).coarse(4).gain(.6).postgain(.8)
    .orbit(2)

_panclick:
  n("0*16").s("square").adsr("0:.02:0:0")
    .chord(chords).mode("above:a6").voicing()
    .pan("[0|1]*16")
    .gain("[.5 .1!15]*2").coarse(8).postgain(1)
    .orbit(2)

_breaks:
  s("msn_bk:7").fit()
    // .chop(8)
    .slice(8, "1 1 2 3 1 2 3 1 1 <1 <2 2*2>> 2 3 4 5 <6 5> 7")
    .cut(3).slow(2).rarely(ply(2))
    .gain(.5).hpf(900).orbit(2)

_stomp:
  n("7").s("msn_st").adsr("0:1:0:0")
  .struct("x/2")
  .hpf(300).gain(.3)

_kick_jersey:
  n("2").s("msn_808")
  .struct("[x(2,8) <x(3,8)!3 x(5,8)>]")
  .cut(2)
  .duckorbit(2).duckdepth(1).duckonset(.01).duckattack(.2)

_kick_break:
  n(4).s("msn_bd")
  .struct("<x <[x@5 x@3] [x@3 x@2 x@3]>>")
  .gain(.5).duckorbit(2).duckdepth(.5).duckonset(.03).duckattack(.2)

all(x=>x.scope({pos: .85}))
