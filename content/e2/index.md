---
title: "Introduction"
highlightlanguage: "gmod_wi"
headerColor: "darkred"
buttonColor: "#ed3b38"
---

## About the course
I welcome you to the tutorial series for all wiremod related. Here we will be exploring Expression 2 in all its glory.

{{< codeblock lua >}}
@name Hello World
@inputs A B
@outputs Add Sub Mul Div
@outputs GreaterThan Highest Lowest
@outputs Vector:vector
@persist D
@trigger all

Add = A + B
Sub = A - B
Mul = A * B
Div = A / B

GreaterThan = A > B

if(A > B) {
  Highest = A, Lowest = B
} else {
  Highest = B, Lowest = A
}

Vector = vec(A, B, 0)
Vector = Vector + vec(0, 0, A + B)
Vector = Vector:normalized()
{{< /codeblock >}}

## Credits
Upcoming list of shoutouts

![The editor](/img/arrow.png)