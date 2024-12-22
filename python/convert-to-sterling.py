import math
import cmath
from fractions import Fraction

while True:
  print("""1. Convert to pounds
        2. Convert to dollars""")
  opt = input(int("Input Choice: "))
  if opt == 1:
    dol = input(float("Dollars: "))
    dol = round((dol/(62.5/960))
    L = 0
    s = 0
    d = 0
    while dol >= 4:
      if dol >= 4:
        dol -=4
        d += 1
    while d >= 12:
      if d >= 12:
        d -= 12
        s += 1
    while s >= 20:
      if s >= 20:
        s -= 20
        L += 1
    print(f"${dol} is £{L} {s}/{d}" + Fraction(dol, 4))
