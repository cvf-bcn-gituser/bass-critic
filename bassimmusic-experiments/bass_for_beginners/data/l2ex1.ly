{% macro color() -%}
     \override NoteHead.color = #(rgb-color%{ next_color() %})
     \override TabStaff.TabNoteHead.color =     #(rgb-color%{ current_color() %})
{%- endmacro %}

{% macro eps(first_bar, last_bar) -%}
_\markup {
  \general-align #Y #DOWN {
    \epsfile #X #56 #"%{ eps_waveform(first_bar, last_bar, w=5, h=0.5, right_border_shift=0) %}"
  }
}
{%- endmacro %}

#(set! paper-alist (cons '("my size" . (cons (* 5.27 in) (* 8 in))) paper-alist))

\paper {
  #(set-paper-size "my size")
}
\header {
  tagline = ""  % removed
}

symbols = {
  \time 4/4
  %{color()%} e8
  %{color()%} b,8
  %{color()%} d8
  %{color()%} e8
  %{color()%} d8
  %{color()%} b,8
  %{color()%} a,8
  %{color()%} b,8
  %{color()%} e8
  %{color()%} b,8
  %{color()%} d8
  %{color()%} e8
  %{color()%} d8
  %{color()%} b,8
  %{color()%} a,8
  %{color()%} b,8
  %{color()%} e8
  %{color()%} b,8
  %{color()%} d8
  %{color()%} e8
  %{color()%} d8
  %{color()%} b,8
  %{color()%} a,8
  %{color()%} b,8
  %{color()%} e8
  %{color()%} b,8
  %{color()%} d8
  %{color()%} e8
  %{color()%} d8
  %{color()%} b,8
  %{color()%} a,8
  %{color()%} b,8
   \bar "|."
  %{color()%} c2
  %{color()%} c4.
  %{color()%} d8
  %{color()%} e2
  %{color()%} e,4.
  %{color()%} g8
  %{color()%} c2
  %{color()%} c4.
  %{color()%} d8
  %{color()%} e2
  %{color()%} e,4.
  %{color()%} g8
   \bar "|."
  %{color()%} c2
  %{color()%} c4.
  %{color()%} d8
  %{color()%} e2
  %{color()%} e,4.
  %{color()%} g8
  %{color()%} c2
  %{color()%} c4.
  %{color()%} d8
  %{color()%} b,8
  %{color()%} b,8
  %{color()%} b,8
  %{color()%} b,8 
  %{color()%} b,8
  %{color()%} b,8
  %{color()%} b,8
  r8
   \bar "|."
}

\score {
  <<
    \new Staff { \clef "F" \symbols }
    \new TabStaff \with {
    stringTunings = #bass-tuning }{
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
