// @title 2025-03-20-zivopisana_glasba @by msn_gf

samples('github:xen0nym/msn_gf-samples/master')
samples('github:yaxu/clean-breaks')
setcpm(130/4)

const scales = "A:minor"
const chords = "<Am B- CM <Em G>>"

xxl_freestyle:
  s("msn_vox_loop:5/28")
    .chop(28).early(1)
    // .slice(28, "<17 18 19 20 21 22>")
    .fit().cut(1)
    // .gain(.5)
    .room(.6)

piano:
  note("<a5>")
  // n(0).chord(chords).mode("root:a5").voicing()
    .s("piano").room(.3)
    .delay("<0!3 .8>")

_pad:
  chord(chords)
    .mode("duck:a4").voicing()
    .s("sine")
    .attack(.1)
    .release(.1)
    .vib("8:.5")
    .hpf(300)
    .distort(1).gain(.3)

_choir:
  n("[0,2,4] [1,3,5]")
    .chord(chords)
    .mode("duck:a4").voicing()
    .struct("[x(3,8)!3 x(5,8)]/4")
    .s("gm_choir_aahs")
    .release(.3).gain(.6).room(.5)

_reese:
  n("0@3 1")
    .chord(chords)
    .mode("root:a2").voicing()
    .s("square")
    .add(note("0,.1"))
    .lpf(600).distort(2).gain(.2)

_stomp:
  n("[0(3,8)!3 0(5,8)]/4")
    .s("msn_st").gain(.3)

_kick:
  n("1 -@2 1 - 1 -@2")
    .rarely(ply(2))
    .s("msn_bd")

_snap:
  s("[- msn_snp:3]*2")
    .room(.1)

_saturday_love:
  s("msn_vox_loop:3/4")
    .chop(8).fit().cut(1)
    // .rarely(ply("2"))
    .gain(.5)
    .room(.2)

_piano:
  n(rand.range(0,5)
    .struct("x -@2 x!2 -@3"))
    .scale("a:ritusen")
    .off(1/8, transpose(12))
  .s("piano")
    .gain("[1 .75@3]*2")
    .room(.2)

_harp:
  n("[0 1] [- 2] [- 3] -")
    .chord(chords)
    .mode("root:a3").voicing()
    .s("folkharp")
    .gain(.5)
    .room(.3)

_funky_drummer:
  s("funkydrummer/2").fit()
    .slice(8, "0 1 2 1 4 <[1 2 1] [5 6 7]>@3").slow(2)
    .cut(2)
    .rarely(ply("2"))
    .hpf("<300@3 600>")
    .phaser(2).phaserdepth("<0@3 .2>")
    .room("<.1@3 .3>")
    .gain(.6)

_think:
  s("msn_bk:2")
    .fit().chop(2)
    .gain(.8).hpf(600)

_kick_jersey:
  n("2")
    .struct("[x(2,8) x(3,8)]")
    .cut(2)
    .s("msn_808")

_crash:
  n("2").slow(8)
    .s("msn_cr").gain(.3)

_whip:
  n("<-@3 <[-@2 [- 0] 1] [[- 0]!3 1]>>")
    .s("msn_whp")
    .gain(.6)
    .delay(.1).delayfeedback(.1)
    .room(.1)

_gun:
n("<3 -@2 [-@2 [- 0] 1]>")
.s("msn_gun")
    .gain(.2)
    .room(.1)

_squeak:
  n("[0 1]*4")
    .s("msn_bed")
    .gain(.02)
    .delay(.1)

_beatbox:
  s("msn_bbx/4")
    .chop(8)
    .fit().cut(1)
    .rarely(ply("2"))
    .hpf(200)
    .gain(.4)

_kick_baile:
  n("9@5 9@3")
    .s("msn_bd")
    .gain(.3)

_perc:
  n("-@4 5@4 5@7 5@5")
    .s("msn_pr")
    .gain(.3)

_bass_drop:
  note("a1/4")
    .s("sine")
    .penv(-12).pattack(5).distort(2)

// all(x=>x.scope())
