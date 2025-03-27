import React from 'react'

interface RoverSVGProps {
  show: boolean
}

export const RoverSVG: React.FC<RoverSVGProps> = ({ show }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="300.000000pt"
      height="300.000000pt"
      viewBox="0 0 300.000000 300.000000"
      preserveAspectRatio="xMidYMid meet"
      className="absolute top-0 left-2/4 h-[180px] w-[180px] max-sm:h-[120px] max-sm:w-[120px]"
      style={{
        transform: show ? 'translate(-50%, 80%)' : 'translate(-50%, 100%)',
        opacity: show ? '1' : '0',
        transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
      }}
    >
      <g
        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#FF4D4D"
        stroke="none"
      >
        <path
          d="M822 2387 c-19 -20 -22 -35 -22 -110 l0 -87 135 0 136 0 -3 76 c-3
72 -2 77 25 100 37 31 81 31 112 -1 22 -21 25 -33 25 -100 0 -68 2 -75 20 -75
18 0 20 7 20 88 0 80 -2 91 -23 110 -22 21 -32 22 -213 22 -186 0 -191 -1
-212 -23z m212 -74 c-4 -38 -11 -74 -17 -80 -13 -17 -158 -18 -175 -1 -7 7
-12 34 -12 60 0 74 20 88 125 88 l86 0 -7 -67z"
        />
        <path
          d="M1110 2350 c-38 -38 -14 -100 38 -100 25 0 62 33 62 55 0 20 -45 65
-65 65 -8 0 -24 -9 -35 -20z m68 -36 c2 -11 -3 -26 -11 -33 -29 -24 -70 17
-46 46 17 20 53 12 57 -13z"
        />
        <path
          d="M780 2170 c0 -6 90 -10 250 -10 160 0 250 4 250 10 0 6 -90 10 -250
10 -160 0 -250 -4 -250 -10z"
        />
        <path
          d="M880 2105 c0 -35 0 -35 45 -35 45 0 45 0 45 35 0 35 0 35 -45 35 -45
0 -45 0 -45 -35z"
        />
        <path
          d="M1090 2105 c0 -35 0 -35 45 -35 45 0 45 0 45 35 0 35 0 35 -45 35
-45 0 -45 0 -45 -35z m70 5 c0 -15 -7 -20 -25 -20 -18 0 -25 5 -25 20 0 15 7
20 25 20 18 0 25 -5 25 -20z"
        />
        <path
          d="M988 2068 c-2 -44 -7 -62 -15 -60 -7 1 -13 -5 -13 -13 0 -8 7 -15 15
-15 10 0 15 -10 15 -30 0 -25 -4 -30 -25 -30 -20 0 -25 -5 -25 -25 0 -20 5
-24 22 -22 22 2 22 1 23 -150 0 -139 -2 -153 -17 -153 -10 0 -18 -4 -18 -10 0
-6 33 -10 79 -10 44 0 83 5 86 10 3 6 -3 10 -14 10 -20 0 -21 5 -21 145 0 125
-2 145 -16 145 -8 0 -12 -4 -9 -10 10 -16 -8 -11 -33 10 l-23 19 24 27 c28 30
52 24 43 -11 -5 -20 -2 -22 27 -21 25 1 33 6 35 24 3 18 -1 22 -22 22 -14 0
-27 6 -27 13 -2 23 3 42 14 50 9 6 9 10 0 14 -9 3 -13 27 -13 69 l0 64 -45 0
-44 0 -3 -62z m55 -38 c6 -51 1 -80 -13 -80 -12 0 -17 31 -12 83 5 62 18 60
25 -3z m-7 -335 c0 -47 -3 -85 -8 -85 -9 0 -11 130 -2 154 3 9 7 16 8 16 1 0
2 -38 2 -85z"
        />
        <path
          d="M798 2066 c-5 -24 -3 -26 34 -26 35 0 39 2 36 23 -2 17 -11 23 -34
25 -27 3 -32 -1 -36 -22z"
        />
        <path
          d="M1196 2075 c-11 -30 -6 -35 35 -35 36 0 40 2 37 23 -4 28 -62 38 -72
12z"
        />
        <path d="M1113 1995 l2 -35 83 0 82 0 0 35 0 34 -84 0 -85 0 2 -34z" />
        <path
          d="M1261 1686 c-63 -22 -64 -23 -65 -59 -1 -36 0 -37 34 -37 19 0 51 3
70 6 35 6 35 6 36 60 0 30 -2 54 -5 53 -4 0 -35 -11 -70 -23z"
        />
        <path
          d="M1360 1654 l0 -57 48 6 c26 3 89 9 140 13 l92 7 0 43 0 44 -140 0
-140 0 0 -56z m219 2 c-2 -3 -40 -6 -84 -8 -105 -4 -112 15 -8 22 70 4 105 -1
92 -14z"
        />
        <path
          d="M1664 1666 c1 -39 4 -46 26 -51 29 -8 60 -33 60 -50 0 -16 -41 -21
-367 -42 l-272 -17 1 -34 1 -35 71 6 c39 3 185 14 324 24 l252 17 0 38 c0 25
7 45 20 58 12 12 20 33 20 53 0 32 -3 34 -57 51 -32 10 -63 20 -69 23 -7 2
-11 -12 -10 -41z"
        />
        <path
          d="M1843 1703 c-8 -3 -13 -23 -13 -48 0 -41 2 -44 35 -55 19 -6 40 -20
45 -31 9 -17 22 -19 105 -19 l95 0 0 68 c0 40 -5 73 -12 80 -12 12 -228 16
-255 5z m82 -27 c30 -45 -16 -91 -61 -61 -28 18 -31 46 -8 69 22 23 51 20 69
-8z m113 -8 c30 -30 0 -78 -37 -58 -32 17 -21 70 14 70 6 0 16 -5 23 -12z m39
-92 c4 -3 -28 -6 -71 -6 -42 0 -75 3 -73 8 6 8 135 7 144 -2z"
        />
        <path
          d="M1865 1674 c-18 -19 -16 -33 7 -48 12 -7 21 -6 32 3 22 18 20 38 -3
51 -15 7 -24 6 -36 -6z"
        />
        <path
          d="M782 1628 c-7 -7 -12 -27 -12 -45 0 -33 0 -33 50 -33 50 0 50 0 50
33 0 40 -15 57 -50 57 -14 0 -31 -5 -38 -12z"
        />
        <path
          d="M2142 1628 c-7 -7 -12 -27 -12 -45 0 -33 0 -33 50 -33 50 0 50 0 50
33 0 40 -15 57 -50 57 -14 0 -31 -5 -38 -12z"
        />
        <path
          d="M1455 1584 c-279 -24 -299 -27 -303 -47 -3 -17 1 -18 30 -12 18 4 40
13 49 21 20 18 33 18 48 0 9 -11 27 -13 69 -9 31 3 61 9 65 13 5 4 46 5 91 3
67 -5 84 -3 95 11 15 18 46 21 56 6 7 -12 65 -13 65 -2 0 14 -48 32 -78 31
-15 -1 -99 -8 -187 -15z"
        />
        <path
          d="M1792 1567 c-26 -27 -28 -54 -6 -85 21 -31 87 -31 108 0 21 30 20 50
-5 82 -26 33 -68 34 -97 3z m58 -7 c35 -19 43 -47 20 -70 l-20 -20 -30 27
c-34 30 -36 36 -14 57 18 19 20 19 44 6z"
        />
        <path
          d="M1823 1553 c-18 -6 -16 -33 2 -33 8 0 15 -7 15 -16 0 -9 5 -14 12
-12 18 6 22 28 5 28 -9 0 -17 8 -19 18 -2 11 -9 17 -15 15z"
        />
        <path
          d="M980 1508 c-40 -43 -11 -108 50 -108 58 0 88 60 54 108 -21 30 -76
30 -104 0z m91 -20 c10 -19 8 -25 -15 -45 -33 -28 -52 -29 -65 -4 -8 15 -5 24
14 45 29 32 50 33 66 4z"
        />
        <path
          d="M753 1493 c5 -30 142 -418 156 -443 7 -13 85 -15 586 -18 392 -1 582
1 590 8 7 6 16 23 20 37 3 15 38 113 76 218 38 106 69 200 69 209 0 14 -19 16
-165 16 -156 0 -165 -1 -165 -19 0 -26 -46 -61 -79 -61 -15 0 -36 7 -47 14
-18 13 -49 13 -248 -2 l-226 -17 248 -68 c188 -52 256 -66 278 -61 43 12 66 6
92 -22 72 -81 -48 -184 -125 -107 -23 22 -84 42 -376 123 -300 84 -353 96
-378 87 -22 -9 -36 -8 -64 6 -20 9 -49 17 -65 17 -29 0 -30 2 -30 45 0 43 1
45 29 45 17 0 33 5 36 10 4 6 -34 10 -106 10 l-111 0 5 -27z m127 -38 l0 -45
-39 0 c-37 0 -40 2 -54 45 l-16 45 55 0 54 0 0 -45z m1220 0 l0 -45 -50 0 -50
0 0 45 0 45 50 0 50 0 0 -45z m113 0 c-14 -43 -17 -45 -54 -45 l-39 0 0 45 0
45 54 0 55 0 -16 -45z m-241 -72 c0 -36 -3 -67 -6 -70 -3 -3 -17 2 -32 12 -20
13 -39 16 -74 12 -32 -4 -74 1 -126 15 -44 11 -86 20 -94 20 -8 1 -19 4 -25 8
-5 5 -30 14 -55 21 -41 12 -42 13 -17 17 15 2 25 8 22 13 -4 5 -2 9 4 9 5 0
12 -4 15 -8 2 -4 39 -4 81 2 65 8 84 7 125 -8 58 -21 102 -12 140 30 21 22 25
23 33 8 5 -9 9 -45 9 -81z m-1092 -48 c0 -36 -3 -45 -18 -45 -11 0 -23 15 -33
45 l-17 45 34 0 c34 0 34 -1 34 -45z m120 0 l0 -45 -50 0 -50 0 0 45 0 45 50
0 50 0 0 -45z m1100 0 l0 -45 -50 0 -50 0 0 45 0 45 50 0 50 0 0 -45z m71 0
c-10 -30 -22 -45 -33 -45 -15 0 -18 9 -18 45 0 44 0 45 34 45 l34 0 -17 -45z
m-990 9 c65 -19 74 -26 61 -50 -6 -11 -13 -27 -16 -37 -3 -10 -11 -15 -17 -11
-6 3 -47 7 -90 8 -56 1 -82 5 -88 15 -11 17 4 71 21 83 20 12 70 9 129 -8z
m117 -70 c6 -11 5 -27 -2 -46 -18 -48 22 -90 70 -73 61 22 46 97 -21 105 -27
3 -36 8 -27 13 7 5 29 6 48 3 21 -4 34 -3 34 4 0 5 7 10 15 10 22 0 31 -31 14
-44 -18 -14 -19 -76 -2 -76 16 0 17 -36 2 -45 -5 -4 -18 0 -27 8 -12 11 -22
13 -34 6 -9 -5 -26 -5 -40 0 -16 6 -26 4 -33 -6 -13 -17 -45 -7 -45 13 0 8 7
17 15 20 20 8 19 64 -2 79 -19 14 -11 45 11 45 8 0 19 -7 24 -16z m-419 -41
c0 -31 -2 -34 -9 -18 -12 28 -12 55 0 55 6 0 10 -17 9 -37z m121 -13 l0 -50
-50 0 -50 0 0 50 0 50 50 0 50 0 0 -50z m1100 0 l0 -50 -50 0 -50 0 0 50 0 50
50 0 50 0 0 -50z m39 33 c0 -10 -4 -27 -9 -38 -7 -16 -9 -13 -9 18 -1 20 4 37
9 37 6 0 10 -8 9 -17z m-549 -23 c36 -10 90 -26 121 -34 81 -23 83 -42 5 -39
-33 1 -102 2 -153 2 -83 1 -93 3 -103 22 -9 15 -9 28 0 49 13 32 19 32 130 0z
m-212 8 c17 -17 15 -53 -3 -68 -38 -31 -96 27 -65 65 15 18 51 20 68 3z m-314
-16 c6 -10 88 -8 104 2 7 4 19 5 27 2 19 -7 20 -35 2 -42 -17 -6 -19 -74 -2
-74 19 0 26 -27 11 -39 -14 -12 -46 -5 -46 10 0 4 -10 5 -22 0 -13 -5 -33 -5
-45 0 -14 5 -25 3 -33 -6 -6 -8 -18 -11 -26 -8 -18 7 -18 43 0 43 19 0 16 61
-3 76 -8 6 -11 18 -8 28 7 17 32 22 41 8z m1035 -78 c2 -1 -4 -22 -13 -46 -15
-38 -20 -43 -49 -43 -31 0 -32 1 -35 48 -3 44 -10 56 -25 40 -4 -3 -2 -12 5
-20 16 -19 6 -24 -16 -7 -15 11 -17 16 -7 28 9 10 27 13 74 9 34 -3 64 -7 66
-9z m-1099 -42 l0 -49 -35 1 c-30 1 -36 5 -50 41 -8 23 -15 44 -15 48 0 4 23
7 50 7 l50 0 0 -48z m795 8 c17 -19 17 -21 0 -40 -16 -17 -31 -19 -173 -19
-162 0 -192 7 -192 39 0 33 30 39 191 40 143 0 157 -2 174 -20z m105 1 c0 -15
-41 -40 -56 -34 -8 3 -14 14 -14 24 0 15 7 19 35 19 19 0 35 -4 35 -9z m65
-11 c18 -20 15 -50 -6 -50 -8 0 -7 5 2 17 13 15 12 16 -9 10 -19 -4 -22 -2
-18 10 5 12 4 13 -7 5 -18 -15 -30 -3 -16 15 16 18 33 16 54 -7z m-571 -7 c8
-20 -12 -24 -84 -21 -43 2 -65 7 -68 17 -3 10 2 13 21 9 14 -3 31 -2 37 2 20
13 89 8 94 -7z"
        />
        <path
          d="M1327 1216 c-8 -20 20 -43 35 -28 14 14 3 42 -16 42 -7 0 -16 -6 -19
-14z"
        />
        <path
          d="M1082 1194 c-29 -20 -31 -79 -3 -94 45 -24 91 2 91 52 0 44 -51 68
-88 42z m73 -25 c13 -20 -5 -59 -30 -65 -32 -8 -55 11 -55 46 0 45 61 59 85
19z"
        />
        <path
          d="M1093 1154 c-8 -22 18 -37 36 -20 7 8 10 19 7 25 -10 16 -36 13 -43
-5z"
        />
        <path
          d="M1445 1100 c-4 -7 -3 -16 3 -22 14 -14 57 -6 57 12 0 18 -50 26 -60
10z"
        />
        <path
          d="M1526 1095 c-3 -8 2 -19 11 -23 23 -14 53 -3 53 19 0 14 -7 19 -29
19 -16 0 -31 -6 -35 -15z"
        />
        <path
          d="M1644 1099 c-11 -19 25 -40 48 -28 11 6 17 16 15 22 -5 16 -53 21
-63 6z"
        />
        <path
          d="M1725 1100 c-4 -7 -3 -16 3 -22 14 -14 57 -6 57 12 0 18 -50 26 -60
10z"
        />
        <path
          d="M1135 1420 l-40 -6 30 -9 c210 -59 660 -183 661 -182 1 1 5 16 8 32
l6 30 -262 73 c-265 73 -304 79 -403 62z"
        />
        <path
          d="M1830 1280 c-53 -53 7 -143 72 -109 30 16 38 28 38 62 0 34 -32 67
-65 67 -14 0 -34 -9 -45 -20z m68 -16 c32 -9 31 -59 -1 -68 -41 -10 -67 3 -67
34 0 26 6 32 40 39 3 0 15 -2 28 -5z"
        />
        <path
          d="M736 1189 c-53 -49 -66 -67 -66 -91 0 -30 0 -30 75 37 69 62 89 95
66 110 -6 3 -39 -22 -75 -56z"
        />
        <path
          d="M2187 1243 c-19 -18 0 -47 68 -108 74 -66 75 -66 75 -38 0 22 -13 41
-52 79 -67 63 -83 75 -91 67z"
        />
        <path
          d="M600 1106 c0 -46 -3 -56 -20 -61 -14 -4 -20 -15 -20 -36 0 -37 33
-54 84 -45 33 6 36 10 36 42 0 27 -5 37 -20 41 -17 5 -20 14 -20 59 0 47 -2
54 -20 54 -18 0 -20 -7 -20 -54z"
        />
        <path
          d="M2360 1106 c0 -45 -3 -54 -20 -59 -15 -4 -20 -14 -20 -41 0 -32 3
-36 36 -42 51 -9 84 8 84 45 0 21 -6 32 -20 36 -17 5 -20 15 -20 61 0 47 -2
54 -20 54 -18 0 -20 -7 -20 -54z"
        />
        <path
          d="M700 1005 c0 -24 3 -25 55 -25 87 0 113 -38 80 -117 -16 -38 -20
-113 -7 -113 10 0 27 35 52 107 23 65 13 110 -31 147 -25 22 -41 26 -90 26
-56 0 -59 -1 -59 -25z"
        />
        <path
          d="M2151 1004 c-44 -37 -54 -82 -31 -147 25 -72 42 -107 52 -107 13 0 9
75 -7 113 -32 77 -12 109 72 117 51 4 58 8 61 28 3 21 0 22 -57 22 -49 0 -65
-4 -90 -26z"
        />
        <g id="wheels">
          <animateTransform
            attributeType="XML"
            attributeName="transform"
            type="translate"
            values="0,0; 0,-10; 0,0; 0,10; 0,0"
            dur="0.3s"
            repeatCount="indefinite"
          />
          <path
            d="M555 931 l-30 -6 25 -18 c32 -22 34 -22 78 8 l37 25 -40 -1 c-22 -1
-53 -4 -70 -8z"
          />
          <path
            d="M2372 915 c44 -30 46 -30 78 -8 l25 18 -30 6 c-16 4 -48 7 -70 8
l-40 1 37 -25z"
          />
          <path d="M698 908 c20 -22 26 -24 57 -14 43 13 33 24 -30 32 l-50 7 23 -25z" />
          <path
            d="M2245 923 c-35 -9 -35 -18 0 -29 31 -10 37 -8 56 13 l22 23 -29 -1
c-16 -1 -38 -3 -49 -6z"
          />
          <path
            d="M496 904 c-11 -8 -28 -14 -38 -14 -19 0 -22 -8 -12 -34 6 -15 10 -14
42 4 l35 21 28 -27 28 -27 42 27 41 28 28 -27 c22 -21 33 -25 52 -19 12 5 30
9 38 9 8 0 16 10 18 23 4 26 -22 30 -52 7 -18 -14 -23 -12 -51 15 l-30 30 -45
-30 -45 -30 -30 30 c-27 26 -32 27 -49 14z"
          >
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              dur="0.5s"
              begin="0s"
              fill="freeze"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="0.5s"
              begin="1s"
              fill="freeze"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M2305 890 c-27 -28 -30 -29 -51 -15 -35 22 -56 19 -52 -7 2 -13 10
-23 18 -23 8 0 26 -4 38 -9 19 -6 30 -2 53 20 l28 27 35 -27 c43 -32 44 -32
77 0 l26 25 34 -20 c36 -22 49 -20 49 10 0 12 -7 19 -18 19 -10 0 -27 7 -38
15 -19 13 -23 12 -49 -15 -27 -28 -30 -29 -52 -15 -13 8 -33 22 -46 30 -22 14
-25 13 -52 -15z"
          >
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              dur="0.3s"
              begin="0s"
              fill="freeze"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="0.3s"
              begin="0.3s"
              fill="freeze"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M496 844 c-11 -8 -28 -14 -38 -14 -11 0 -18 -7 -18 -20 0 -24 22 -26
56 -4 24 16 26 16 54 -11 l29 -28 40 26 c23 15 44 27 48 27 4 0 18 -11 32 -24
24 -23 29 -24 64 -13 24 8 37 18 37 29 0 22 -28 23 -54 3 -18 -14 -23 -12 -51
15 l-30 30 -45 -30 -45 -30 -30 30 c-27 26 -32 27 -49 14z"
          />
          <path
            d="M2305 830 c-27 -28 -30 -29 -51 -15 -31 20 -54 19 -54 -3 0 -11 13
-21 38 -29 34 -11 39 -10 63 13 14 13 28 24 32 24 4 0 25 -12 48 -27 l40 -26
29 28 c27 26 30 26 51 11 32 -22 59 -21 59 4 0 12 -7 20 -18 20 -10 0 -27 7
-38 15 -19 13 -23 12 -49 -15 -27 -28 -30 -29 -52 -15 -13 8 -33 22 -46 30
-22 14 -25 13 -52 -15z"
          />
          <path
            d="M496 784 c-11 -8 -28 -14 -38 -14 -11 0 -18 -7 -18 -20 0 -24 22 -26
56 -4 24 16 26 16 54 -11 l29 -28 40 26 c23 15 44 27 48 27 4 0 20 -12 35 -27
22 -21 31 -24 40 -15 7 7 22 12 35 12 16 0 23 6 23 20 0 24 -27 27 -56 6 -17
-13 -22 -12 -51 16 l-31 30 -35 -26 c-42 -32 -54 -32 -86 -2 -23 22 -28 23
-45 10z"
          />
          <path
            d="M2305 770 c-26 -27 -30 -28 -49 -15 -30 21 -56 19 -56 -5 0 -14 7
-20 23 -20 13 0 28 -5 35 -12 9 -9 18 -6 40 15 15 15 31 27 35 27 4 0 25 -12
48 -27 l40 -26 29 28 c28 27 30 27 54 11 34 -22 56 -20 56 4 0 12 -7 20 -18
20 -10 0 -27 7 -38 15 -19 13 -23 12 -44 -10 -29 -31 -38 -31 -84 0 -20 14
-38 25 -40 25 -1 0 -15 -13 -31 -30z"
          />
          <path
            d="M494 725 c-10 -8 -27 -15 -36 -15 -22 0 -25 -40 -3 -40 9 0 27 7 41
16 24 16 26 16 54 -11 l28 -27 38 26 c48 32 51 32 86 -1 22 -21 31 -24 40 -15
7 7 22 12 35 12 16 0 23 6 23 20 0 23 -17 25 -55 8 -22 -10 -29 -8 -54 16
l-29 28 -40 -27 c-39 -26 -41 -26 -66 -10 -14 10 -26 21 -26 26 0 13 -14 11
-36 -6z"
          >
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              dur="0.3s"
              begin="0s"
              fill="freeze"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="0.3s"
              begin="0.3s"
              fill="freeze"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M2308 713 c-24 -24 -30 -25 -53 -15 -38 17 -55 15 -55 -8 0 -14 7
-20 23 -20 13 0 28 -5 35 -12 9 -9 18 -6 40 15 35 33 38 33 86 1 l38 -26 28
27 c28 27 30 27 54 11 34 -22 56 -20 56 4 0 11 -7 20 -15 20 -9 0 -27 8 -41
17 -15 9 -29 12 -32 7 -4 -5 -17 -18 -29 -28 -22 -19 -23 -19 -63 8 -22 14
-41 26 -43 26 -1 0 -15 -12 -29 -27z"
          >
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              dur="0.3s"
              begin="0s"
              fill="freeze"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="0.3s"
              begin="0.3s"
              fill="freeze"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M492 664 c-12 -8 -26 -13 -31 -9 -17 10 -21 -11 -7 -31 14 -18 15
-18 33 -1 26 23 32 22 64 -9 l27 -26 45 30 44 31 26 -26 c22 -23 30 -25 58
-17 32 9 59 37 47 49 -4 4 -23 -1 -43 -11 -36 -17 -36 -17 -64 10 l-29 28 -41
-28 -42 -27 -27 26 c-33 32 -31 31 -60 11z"
          />
          <path
            d="M2308 653 c-26 -26 -27 -26 -63 -9 -20 10 -39 15 -43 11 -12 -12 15
-40 47 -49 28 -8 36 -6 58 17 l26 26 44 -31 45 -30 27 26 c32 31 38 32 64 9
18 -17 19 -17 33 1 14 20 10 41 -6 31 -5 -3 -21 2 -35 11 -25 16 -27 16 -55
-11 l-29 -28 -40 26 c-23 15 -42 27 -44 27 -1 0 -14 -12 -29 -27z"
          />
          <path
            d="M495 610 c-3 -5 -3 -10 2 -10 4 0 19 -3 33 -7 22 -6 24 -5 11 10 -15
19 -37 22 -46 7z"
          />
          <path
            d="M633 608 c-26 -12 -32 -33 -7 -24 9 3 29 6 46 6 26 0 29 2 18 15 -14
17 -26 18 -57 3z"
          />
          <path
            d="M2310 605 c-11 -13 -8 -15 18 -15 17 0 37 -3 46 -6 27 -10 18 12 -9
24 -34 15 -40 15 -55 -3z"
          />
          <path
            d="M2460 605 c-13 -16 -8 -18 27 -9 13 4 20 10 17 15 -8 14 -30 11 -44
-6z"
          />
        </g>
      </g>
    </svg>
  )
}
