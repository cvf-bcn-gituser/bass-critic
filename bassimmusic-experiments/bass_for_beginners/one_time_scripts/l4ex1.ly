#(set! paper-alist (cons '("my size" . (cons (* 8.27 in) (* 4.5 in))) paper-alist))

\paper {
  #(set-paper-size "my size")
}

\header {
  tagline = ""  % removed
}

symbols = {
  \time 4/4
   g,4
   gis,
   a,
   ais,
   b,
   c
   cis
   d
   dis
   e
   f
   fis
   g
   gis
   a
   ais
   b
   c'
   cis'
   d'
   dis'
   e'
   f'
   fis'
   g'
   ges'
   f'
   e'
   ees'
   d'
   des'
   c'
   b
   bes
   a
   aes
   g
   ges
   f
   e
   ees
   d
   des
   c
   b,
   bes,
   a,
   aes,
   g,1
   \bar "|."
}

\score {
  <<
    \new Staff { \clef "G_8" \symbols }
    \new TabStaff {
    \clef moderntab
    \symbols
      }
  >>
 \layout {
  indent = #0
  \context {
      \Score
      proportionalNotationDuration = #(ly:make-moment 1/10)
    }
  }
}


\version "2.18.2"  % necessary for upgrading to future LilyPond versions.
