
import Sidebar from "@/components/sidebars/Sidebar";
import "./home.scss"
import CarouselComponent from "@/components/carousels/Carousel";
import Course from "../components/courses/Course";
import Blog from "./blogs/Blog";
import FeatureVideo from "./featureVideo/FeatureVideo";
import { Category } from "@/interface/Interface";
export default function Home() {
  const categoryCourseData: Category[] = [
    {
      id: 1,
      nameCategory: "category 1",
      listCourse: [
        {
          id: 1,
          name: "Course 1",
          lessonQuantity: 10,
          des: "Description of Course 1",
          studyTime: "2 hours",
          studyLevel: "Intermediate",
          img:"https://www.eastsidernews.org.au/wp-content/uploads/2023/06/English-language.jpg",
          price: "999.000",
          course_chapter: [
            {
              id: 1,
              title: "Chapter 1",
              numericalOrder: 1,
              lesson: [
                {
                  id: 1,
                  title: "Lesson 1.1",
                  pdfUrl: "/pdf/lesson1.1.pdf",
                  videoUrl: "/videos/lesson1.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 2,
                  title: "Lesson 1.2",
                  pdfUrl: "/pdf/lesson1.2.pdf",
                  videoUrl: "/videos/lesson1.2.mp4",
                  numericalOrder: 2
                },
                {
                  id: 3,
                  title: "Lesson 1.2",
                  pdfUrl: "/pdf/lesson1.2.pdf",
                  videoUrl: "/videos/lesson1.2.mp4",
                  numericalOrder: 2
                }
              ]
            },
            {
              id: 2,
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 3,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 4,
                  title: "Lesson 2.2",
                  pdfUrl: "/pdf/lesson2.2.pdf",
                  videoUrl: "/videos/lesson2.2.mp4",
                  numericalOrder: 2
                }
              ]
            },
            {
              id: 99,
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 100,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 101,
                  title: "Lesson 2.2",
                  pdfUrl: "/pdf/lesson2.2.pdf",
                  videoUrl: "/videos/lesson2.2.mp4",
                  numericalOrder: 2
                }
              ]
            }
          ]
        }, 
        {
          id: 1,
          name: "Course 2",
          lessonQuantity: 10,
          des: "Description of Course 1",
          studyTime: "2 hours",
          studyLevel: "Intermediate",
          img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTExYUExMXFhYXGBgYGBYZGRgZGxgZGRgXGRsZGBkeHioiGx4nHhYXIzMjJystMDAwGCE2OzYvOiovMC0BCwsLDw4PHBERGy8nIiUvLzI4Ly0vMjQvLy8vMjEwODExOC84Ly8vLzgvMS8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAKoBKAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xABMEAACAgAEBQEEBwQFCAgHAAABAgMRAAQSIQUTIjFBUQYyYXEHFCNCUoGRM2KSoRUkNHKxQ1NUgpOywdFjc3SUxNLU8BZEg6KztOH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAgMBBAX/xAAyEQACAgEDAwIEBQIHAAAAAAAAAQIRAxIhMQRBURNhBXGB8BQiMqHRkcEkM0JiseHx/9oADAMBAAIRAxEAPwDnuEwYs8nwSSSLnBo0QuyW7UbVVYkKASw6190E79se/OcYLVJ0jy4QlN6Yq37FZgxcxcDT7+YUemhJHP56gg/mfP5scY4LJAb/AGkRAKzKG0MCSBuR0t0npO+JQ6nFOWmMk2VydLmxx1Si0vcrcGDBi5zhgw+mTlYBhG5DGlIRiCd9gaonY/oceczlnj2kR0vsGVlv5WMZaChoYMGDGgGDCYlxcNmaMyiNuWATzD0qa7hWNBj8BZxjdchREwuLPLcFdhGx2E0czxEb6mh13Gd+kkpQ/vL67WGV4fl0sSIzFDlHlLOVAhmCGWlUAqyNIi2Sfe7CsI8iX39BlBszZOFvGy/o5oIZXhOmREmRZVOmSllic7ruJFRM2jVvpiNdJBOe46tyLKH5gmXmatHLs63jbos11RMbve727YI5FJmyhSK3C4MGKCBgwYMAAcOch9HM0NoJoPpOkn01dr2O3wOLj2ZzCrzRyw0gQyRk6bJjDF01aSwBQs/SVNxAA74ch4u+ZEkLheuJytambXCDMvXIzObCOlaq+07Ym5O+B1FVyZ/BgwYoIGDDpy7DRq6RINSknYrrZC23YBkYf6uLb+gAGcPOlJCsxaNJX6HMek6WVCQBKGYi9IB7kVhHJI1Rb4KTBjST8JysazgmaWTL6LKvHGjq7hA69Dkga49tr1eMSJ+GIskLDJVlj9WkadjMbSQRNIusuIzuzIQFvbxhfVQ3psyROPUSFjSgsdzQFmgLJ29ACfkMbXJQjKOjqOlc3GC5AJMMpZJImau6PlypqtzY2bd3hS22XSQkzQZnMRazZMgWQSTox7ksk7st+Y2Hd8K83hDLGZEcJm5XO5Tcur1be7q06qvVp1dOqqva8Qsa1siDmIonkkXmZaOFTGFIJjj5Mqvf3RJC9gb+dsZEHFIS1CzjQuDBgw4gmFwYMABgwYMACHGv4lI1qh2CIiql7RjQpKL8AxO/nvjI41sA1nLGrLpCKPkrUVH56B+uPJ+LJvHH5ns/BZJZZX4Gly7llQI2pq0rRttXu163iXw0RNKYo5VlLI6yR7rrAUl9DnoYKRqBJW9G1GsNce4+hDmEhucZu7MXiZ3t2G2yupK1dEAEaeoYrPZ3NMby4upta2Gel1xPHbKG0FBqDMasBLvasSwfDFFOcm7XFbV7lOp+LOdRjFU+U97KeZArMoYMAxAYdmANBh8D3xK4RCjyhWq2BVA2oK0hFIHKdQXUR29ANgSRCxP4ONLGbvyNMgXuWYMNNj8Aaix9KHkY9h8HiLk88XeUHmLJHy3EafYMwUBVIRHU09hVbdxv1GzviDkeIyw0I3YLdlLOhjtepLpgQADfgYvoc3HNIYVXlRzLy7pb1GihZY1RSBIBW1gE7nGWBxBqtmU1Xui3zUalEmQUrlgy2Dy3Um1HmtJRhY7NVkgnEQf+/GJEG2W3FaprS/NIQ5X0F8sE+TX4TiPi8G3HcnNbm2hRWestGkXMEyLIp0SROyLLBHIXJaKQ8p01A6XDkg9wGcxImYjYLCczLCY26C4DtLEqTSaVXW6h4Yu2my5bzii/pyUKAoVXHKuUA8xuTRi1WxXppdwoJ0iycVuo7+L2Nbbd6oeNhtiaxPkdzRrMtxVIEghlQB4lEurUxaOeLMTyRqVU0upSVOxP2qE7KMQ5uNwlpWkSSUsskRfUEMsRZTG0pZW+0XSDqrqpb3BJz2LZXihiiPJjlklDuTIZKRRI0aqoR1F3G5JN9x2o3rxpb+TNbZ4m47MSxVtGp0lOnxKiaOYp7hmBOqu9/AYhZvNvK2uRizUBZ9B2AHYAegxYQ8SZmVEy+WUswUfZK25IA9/V64tuI5XLGlYMzozhniSHLqwsUNCqw2IamO5Db9hiWXqMeCte1lsPTZeotQ3oyeDGgPDsqdhz0/eLxyAfHQI0J/ixS53LNFI8bVqRiprsa8g+Qe4+Bw+Dqsea9DujOo6PL09a1VjODD2SyxlkSNSAXdUBawAWIUWQDQs+mJQ4Yv8ApOX/ADMy/wC9EMXckjnSbJPstxSHLT82aEy0p0AMV0yWKY+oqwR+92OGuD8emy8M0MWip1CuxW3AAYWjeD1H1rxRxBzmWaKR42rUjMjVuLUkGj53GGcLoi9/NG6mtgwYMGHMLpoGmgyqotvzpsuPjZhkTf0uaT9Di0OTlVMtM+uBvq7Rxyt9mqzRyymMMzbaXi6LPT1b7XjN5XiE0SlYppY1bcqjsoJ7WQp3OLHhXCI3QPIJHkkYiOOMqpKjpLMxViba1AA+4xJ7Xy5pLHG5Olf/ACdGGEsstMVb/gkZh4I3mUlFM2Vp1jIeNcxrSQKhS1ALRIaB0qXI7DEPMS5eaKAyySLJHEYiqRK9gSSsh1tItDS6r2Pu4mf0TlOzThD6fWIJK+dKB/PCxezcTn7LMF/giwSH9EzBY/w4nHqMVW219GO+nyXSSfyaGM17QB/rCmLVFPKsxQsQVe1aQqw/HVH/AFT43j8R488rsyokWqb6x0F7EtsS4ZmJBJINCh0igPMl/ZsXpXMx67rTIk0ZvtROgqD/AHiBijliKsVYUykgg9wQaIP5jFsU8WT9DTonlx5cW001ZZZbiWZlYwpM/wDWJDqUHSrPK1NsNgGJAIFAjbtjx/R4WdomDyKASHhAa0oMsqqfeQqQ1Wux7jD/AAKaKMNKwOpGUF7P2MUgaNp0Ue86Myd7HUNvIYdHEZUtU+TcoSp35fMIVlN30Ski/SZPw43VU9K2/kTTcbYzmOHuHVU+15g1RsgY8xbIsLV2CrArVgqRh08LC7STwxt+Al2I/vGNGVfkTY8gYl8QzgeKR4yUVszLpUGjy5VVmUqDWm44+ncYpKxSNtCOkx3NZdo3aNxpZSVYehBo9tj8x3w1iy45ZaJ2vU8EJN/upywfzWNT+eK3DRdoxqmGDBgxpgYvcpxNuRHFE6pKmsW4RSVZiwEUpHRWpu7A2dj4FFgOEnCM+UNGco8MkDJvr5ZQq/4W6a2uzfYVvZ2rftibl6gSVuZC5dDGgFMevpdgCNSUmsXtZYdxYxEj4hII2iu1OwvcoLtlQ/dDGrHmvncXGtN8mbLgMTOEzBZDZUakkS2922Rguq9q1ae+w77VYh4Ma1aMWxYRwSQ/agRuBamnWQDWrL1BGsWCaPrW94XiUEP1cNFHEGtWciSR3QNqpaJ0gWBZ96yBVdTQ8rmWjOpaNgghgCrA+GU9xYB+YB8Yf/pOWitrpPdOXGEO99SadLbgHceMTnByHjJIddOfEJUDa00RtEo1UqptIoG6JtuCPeY0TvVeVI7ir+HpiZHxeZRSFUFhrSOKM3VXqVQ35XhnN52WU3LK8hHYu7OR8LYnGwUkqZkmnuhjBgwYoKGLLJZqNlWKaNnVSSrxmpEUm22IKut22k1uT1CzitxpOFZmWFcu8TBUKyF7eJFeYSONLmTpJCcghTuFJK0WJwmR7DQ5IfEOErl5CkmYCyK1jTGzULtHJsAFl0uBvQYXvi0k41AzuY5ZItbK5DR9GsEtYKszABmahpNDuTiq9rCTmGL3r0RcwE2RJykDgkdyCN/Q2PGKzLQ63VL06mVbPiyBZ+V458vTQzxTnudOHqp4JP0+5qpdomlklHJ1Bg6KHLyPY0rekg7MSrFaAutxea4pmxLI0lUDVDuaVQos+TSjG69nJisxhMDxwMZKDQKgjKqwEpmYapGZaUm/vdgnQefSAWQp1CzTVp1C9jp8WN68Yj0XTwxOWm78vwW63q55lFSql2Xk0v8A8L5jJzQyZmMJGPtiwYMNMRVipIOzElEA8lxV4puF5cy5iIONnkBY1tpDXI1+irqJ9Kw3mOIzSIsck0jonuozsyr4GlSaG22LbN+2GZkyseUPLEUahAypTlQumixPlTR0gEgkG7N9dTrtZxXEpc7mTLJJIRRkdnPzZix/xw0oJIAFk7AepPYYTEnhkgWaJmNBZEYn0AYEn+WK8LYnyybmuGs0oihSwrjLh+3MkW9bkk9rJN9lXRfxjvHlzqVJXLICeYVHKci+kD3lDVSs3c1YW9rOPo0xlgjLLm4HYkdLzxcpXbyBeoE+BGfhiPwF5wJIFOh41dOSTpXVK3KlkmF03LRj3B06VPZTfPKclRZQTKbGpzBMcEmkbrlIgPhzhAJD/DPL+uMtjS8N4tEwUSPypFQR6mQyRSIF0BZFALKdFKelgQOwNkx66EpRi4q6abR09BOEZTjJ1aaT9yk9m+HJPKySaqEbOArKhYjSAAzAgdyTt2U4b47w+GJgIp1msEstAmP0BdSY3v1U+NwMaOX2fy8nuLEf+ozaC/8A6cxdx+gx4/8AhNf8xmm/ulT/ADEJxzvqYp3K17NFl0k2qjT900N5aVpYISxJfri1HcsqEaCT5rWU+SAeMV3tIwObzJHY5icj5GV6xpsvk3V4rgeGGLT7ysAqK5d2d2AskliTtZNADYYymRyEs5YqBQ6pJHIVEs93c7CzdDufAJxnw+nkyTWydFPiNrFixt20mMZXMvG2pDTUR2B2IIIIIIIIJ2OLTKZ3OTBqJlGlkeR1RtKuCGBmcdGx/EPGI7yQRbRjnuP8o4Kxg/uRbFvnJsfKYi5vOSSkcxy2n3R2VfgijpUbdgBj1a1dv6nkXXckjh8Y/a5iNdtxGGmb5AqOWf48elny8e6RPM34pqVL+MKEk/nJXqDitwY3T5Zl+B3NZp5XLyNqZu528CgABsAAAABsAAB2w1gwY0AwYDgxpgYMGDAAYMGDAAYMGDAAYMGDAAYMGDAAYMGDAAYkZTPSxXypZI7q9Dsl1dXRF1Z/XEfBgqzRSbPxPnCVgwYAJs3FpmDanFsul3CRiR1/C8oXW4Nbhib84hYMGMSS4BtvkMGAYMaYAwVgwYAJGezXNYORTaQrm71su2v4EgLfqQT5rEiaFs1FYXVPGUXxckRBVWa+/LIVdX4XF7JYr8BGElBNUNGVOy24fnIcvmHbRz0UusTayhrVSyhgPe0jbtV2KIBDGZzUBY6MuoTxTyh+3q0jr3+B/LEDBjdKuzNRPWDLN/lZI/g0YcfIOrAn+AY8cnLA7vK3yiRb/MyH/dxDwYNPubqJwmy6+7l2Y+ObLa/wxoh/+7HjO8QklAViAi2UjUBI0vyqChfq3c+ScRMGDSg1MMGDCE4YUXD+Sg1tRNABmY1dKqljQ8mhQ7bkYsfatv6w42taBIAF92qgK6QwT5IMRuFMqiZnBYLCbUMFJ1SRR+8Vaq5l9vAwmq42Np/NQ2c4gFLBHX7xdmPzbUKP90LjzmYV0rIlhWJUqd9DgA1fkEEEHv3H3bPnPwCOWRASQjuoJ8hWIBP6YsY4YxlTYbUwMuoMKDRyCJV06exEzXv4GBtKmu4JXZT4MGDDiheLyfh0ceiIxNNKyl3IlWEqdbx8uNWDczeMm6JOoUB5r+DkCZGbshMp+IiBlI/MIR+eLOeCTmOAs7hUgiYplkzC3HBGG1FzV6ixI+N3jnzTaaSLY4pq2QouHJK5SFysg1XDOpRxpFtTLatpAYkHS22ynEr2h4Tl4JeWmZ30hvtEYDctVMgbwFO4He8SvZyQPmmlUhxDlyyhQ4rSQNBVrKnSWGkFlHZTQADvG5pTNJFCHfR9kqpmopAeWoiBbLdQK9NkUK3JIxD1pa1G+xb0o6HL3ozGYgZG0tV0DsQwIZQykEEggqwO3rho4uvadwXQBVAVXVSFAJRJZI4rIHV9nHGQTvRxSt2x2xlqimzlkqdHV5PY/JqikZdCSiklnzA3KqSTUwAUA7mgDq28Blh9kcmRvl4wzUUUyZgFUr9tN9t0hibVPe0r6khL7JgExal6RyqS7MrlVILUdkW9kHpbHdq5FmvaHNiRwM3mK1MP20nqf3sefjU5tpSf9Tqk4x7Gn+kH2dyuWy6SZeMK3OVGIeVjRjdqYO7AE6QaG47Y58x2PyxMzfEp5QBLPLIAbAeR3AO4sBifBOIb9j8jjtxwlGNSdnNOSlK0jrOc9i8lGTqiGgXba5lYKDZey5UBE3LEaSfTYNzHiOSaCWSJ/ejZlO1XR7gehFEfPHd0hDykMKAdiAaJdlLNrYDbStdKeTRJvVjnf0p8KqSPMKpCyARtfvWoPLZx4LICK/6KzV1jk6fK3PTJ8l8uNabSE9i/Z/Kz5VpJo2eUyuiHU6qFCxnfSwB3ckDYn1ABIy/tPlEhzU0UYKojUASWrYbajud73xvPo8bTw92A6hNLRINLccXUa+Xu7XXcVqXD+139tzN/55xv8GI9B6emK4pSeWSb2EmkoId9lfZ9s28lXpjUFqIBJZtKrqIIUe8xajQRtiaB2uT9hcszqgicg7lnmO0f4m0otEkNQ9NzuCmIP0XrUOZf7peIOT2CqshAI+9bOAFFkkgV5X39I3E8xByEjlkhL8yRwjlGPuKokZSCSAD09hfbtSZJznk0Rdf+DwjGMNTRcw+xGQkVnSEcujofmy9Q2PMBLlQlbhqOrWCBt1cp4pleTNLECTy5JI7Pc6HK2f0xruEe3hSBYpxNKy6jzObbPbMy6mYFhRagbO1132yHEc0ZpZJSKMjvIQOwLsWofK8UwxyRk9b2Eyyg0tJp/YHgMOZE7TJrMZi0rqdQdYmuyhsbxruboXsSRhv264NDlhAYY9GsyhiGchgnJpgHZiN3bsa7d8Wv0VjpzNLqJbLgWQFB05nqf90bmh3NeLx4+lQKPq+klurManI3dqy4Lfy014C6fGE1y/Eab2/6G0r0rowWDBgx2nOdC9lfZfLTZOOaSMM7F7JaUABJCu2hgDYAAABNnzsMZD2nyaQZmaJAQqNQB3I6Qauz2J9T8zjpHsGv9Ri30CpS0m3SBLLei/vm61Nso38tjnvtz/bMxQoahQ326F9d/wBd8ceKcnlkm9ty84rQnRr8h7CQoimdXZyiO1yUo1KrNSouru2gdRLEEgViyj9ispoXVl05shJVObONKChqkIlNC2W6ur21d8aFg2pytdFknYhTpPLG/vOQAxB2VT2smuON7V51jZzU1kb01evgbeT+uIw9TJbUqHloh2Lz6Q/Z3L5VYWgsF2cEaywpVQ3RsresGiexHzNF7J8OTMZqKGT3X5l9/uxO47b1ajtvWInEeLTz6efK8mjVp1G61Vqr56V/TFn7Cf26Hv2m90At+wl90HYn0B2x11KGN296e5G4ymqWxfe2HsxloMu8kSFGVo6IdmFOapgxO5HVtuNrrbVgWNA46z9Ig/qT2aYvEdAJIjUs1AnuzGt2PeqHZq5K/Y/LC9NJyhbfc3NFKWx1TO+w2SC6IhKWCtqk5n3lH4SpDAEMDQG9AfeZeb8HiDzRggGyDp/FXVo+OogLX72O55mG9Wk7faMx8tQbpHfYeT8CB40cBTsMJ00pT1Js3MlFqkaCo80uqm5y0HlJ94lCQ7qBWkOpQkVQMZNmxinyeYC6tS6ldSrKDpNWrCjRohlU9j2xYZXi9rNzmLM8TICFQs1iwHkoOeoI1knZT6jFccq4D2NPLoMG2IJNBa/F3Neit6Y6IqrT4Jt8NEyPLnMPNIAw6tRSNDI3WxqlsdI7FifI9ce89m1SM5dCH0swMpUA6dStoSmYadSatXc7eO9SRhcNpF1BgwYMMYS+HR3zfUQT1+cbL/IMT8hiw4jlYZJ5nuFtUsjK4zuXS1MjFKBB09JHe8U0blSGUkEbgg0QfUEdsTf6azNV9Yk/ja/1u8QnjcpWmVhkSVNGs9lspIiTTseYWdCCsiTEiANJTSKaOpRos1ZrtYxTxQOsqSNFJpjcSs7ZWKPTyrlLCaLYk6NNHbr9aIqhxabvqUk92McbMw9HYqWcf3icCcUYUeXBqBBVhBEpBBsEBVCnf1BxL8PLU5bblfWWlR8f3PPFxUrIP8mFiv15SLGT+ZQn88Qj2wpN/E+vn88Ie2OpKlRzN27O65aTojABvRDZrc9KMEUd6O1+WNXadJiy+zmUQFpMmruWbpCv6E7kE/hNne2YBfF23AYtCRyubLLEsagdhpS6+Nklm8DpHUXLfPzpRIIF2b7d/OPNw43NunVHZkkopWrNL7e8PjgzEaRoifYIXCXWvXKCaJNWFU18u/c5l+x+WFAwj9j8jj0Yx0xSs5JO3Z3XjkhWHMlCVZIswxeqNiKQqF70AaN92O4IACmExPFMn4CPHfkCOcGgPjUiV6hCPdB6rHjWV/quZaStTR5oRqN6uOQWNveq9TeNWnc2x5/9GXHTGz5didEn2ijf30U6hQ/Egv1uJQNzjzIRuLlHlM7JSpqL4ZpfoxqPJtzAVKTy2p76lWEaQvfUGrfwa2siuc+139tzX/aJv/yNjshySx6tKkTOXdl2IjLrGrSEVp1MEX13lfamZTxr2s/tuZ/7RL/vti/TS1ZHLyTzKopGz+ikXFNsCVljZb7KeXINRPYAC9z613NGq+k97nh3J+yY2fNzygmvA27Hf8XVeJ30XsNE67ktLCAo+8dExAA89id9gASdgSs72vykP9I5IZoqITC2oklUFGYoCxO41FBZ2PyNYy9Odv74CrxpHMMGOx5bgmWnAlTLQCFqAVEhbVRYEcxATq3Ooq3SY1rb9pyTiMAjlkjHZJHUetKxAv8ATHVizLI2q4IzxuBu/osoRZgmzbwih5pZttX3RvufyG5xH+lPvlwSL+2sDbTtDS6b6QFC0PArv7zTfopgZ45VXYc6PUb3AEcnu/vHtfgaj2BVl+k+KN5MrGFcronVeUoJZrjNqCQWWybJIJ3OOW/8R9+C6V4vvyYPP8NMKqWdCW2KLq1IQASr2tBhqWxZ74hY03tIIksrCXRi9SiU6RMxp2K0eomK9F6aNgC7xmcdeKeuKfkhkg4SafY637B/2GEAWx5mnbYETSdRJvURYpaoHdr2GOfe3AvO5je+ob3d9C73Zv52fzx0b6OMvrycRcgRKsha/Nzy7N6KB47sWoUA1889uiPr+ZI7awR4+4vjxjmw/wCdL6lcn6EdSymeWeEPAS6kgroAbQ5p2aRQDTKdVKRuVs3qAPnI+zOWcF3ysSoLUDkAFmLaBpsDbVqC/i6Wuvf4kDRsdx5840PsNmGOdjuQi0nBNk7fV5j+IXVA9x27jvjJ9O4RbjI2OZSaTRbfSHwGGBUlhjEeuRkKKxKgVadyTdA2RSnx5xUewX9uh+U3cE//AC8vgbn5DGo+kecvlYyFKoJwqX5qOTW3gk3VkgGxuAQVXK+w1/XYtIBapqBIAJ+ry0CTsB8TimNt4HfhizSWRV7HVZ8us3QY1dDvokAIZgR1ybV6du3SF7MGZHsvlC1DLxMqUHflVzGA3VR2qyLbsKYd7Ks+3JaDh0qrIwlPKLMtod5U891BvZburLWxJxyCTiU9H7aX/aP/AM8c+HFKcbjKis5qLpo7nmM6ZNQjHTRLtXfSDt8ANtj289ZAHA07Y+h83IgRwpv3yzVQ1EMav4Akf/0kj54TsMV6P/V9CfUdiTlkQJJI4LBAtKDp1MzUATR2oOfyGLfP5yMAQuEYRkjpjmbdekAucxGXC7hbGwNChtinY/1eb+/D/hL/AM8euNyAZiev87Lt/rti73k7fBNOo7IkS5nLgfswfhypR/4s49RolhjAhgOjVMhmUxrIWUMdUjAMGV9iCCUIvcHFEzE98XRy7tlbWEuOQSX1Vy9GYmLELfX0kA7HTq8XukpNcNjR35RCmiKMyNsykqfmpIP8xgxJ4wP6xMD35sl/xtgx0p7EHyQ8IThcaX2Oy8rJmWgYJKI41RiwWgZVkcAnaysLbeRY84yctKs2MdTozV4MbXMyaoGfLHLAPmGBMi5ZFcpl8vrMazgdBlZ2AFUGGwusVfDOHRvlszLIBzWDmGqAHIKSzsoXprS6qK2A1V2xNZdrY7x70jPYQ9saTLRZYjKRyQaTOnVMkkmtWM8sIfSzFCPswStDzRG2H8vwTLnkJKHjdnzKyyiQMqjLJbOFKeSG87BfONeVd19/aMWN9jpceYbQlRylUjj6gjNqIQUF0g9CgMdvQ7M0i4i53h0ZDassnMcEk/V4isQ6j0/ZnXJ3odQAjXuWGvlkHs7agyNy9L5gTHSG5a5cQ2QLGpi8ugCxZK7jc4hcSyEcfLaNtaSoXUsoR1p2Qq6hmANodwTYIPwxyLp1e0v2Oh5XW6Nt9IeQhjgQrDHHJzgpKJGnSY3YqNIGsAlBq3G1DcMW54/Y/LCgYXHZjhojV2c05W7o7xxjMao8wSH0LFKNZVqb7KXZfAQBSL2HY9RkxwrLTtG6uhp0ZWU+jKQQf1GGtA9Bj1hMWD001d2NPJqpnb+E8Q58SSRIz84A0oZlRuxWUjsEYlQCdyxatNsOTe15BzuYIN3NIb9bY4pyg9MSIspIys6xuUX3nVWKrX4mAofnjMeFY5N2bLJrVUbf6KuKRRPNHIyK8nKMesgKdOtWBJ9A4OkEFtJX1xtM/lEzG8uXMx1No5kbEgnSCxYVS7p03X2bEdK6jw4486B6D9MLk6bVPWnQ0M2mOlo7plxyo+UsfJiUnW2ho1AZgxUMapFDAu9gsQaI0UOMcXnEk8zr7ryyMvyZ2I/kcQgg9Bj1hsOH023d2Lky60lR0T6LM3pjzKgMxLQ9CrqLAiUb190FRfYE6VJAJxtSJDqtZFVAS7rE7N2YEQgpbGw1EDq0oSCrKp4KwvvvhCg9B+mJz6XVJyvn2Gjm0pKjvTqzvc0REY0qVePUArMykFitH7xZ7oBEI2NPwZOw+WE5Y9Bj1iuDD6d7i5cms697AzH6hAoVzvMbCMypUkhLGgdTUNhRI7d3XHPvb8Vnsz3vV573oXvufPxOKEqPTC4IYdM3K+Qll1RUa4O5ZzJxs+2XRI0vfkK5dV0tY6DqsBaC+Hce8Do9QcLZWJKFFoLoRAt0CxLFFFityR3IUDqH2nCdA9Bg5Y9BiP4T/d+w/rrwdD+lTi8brBl0oGMszKKtRpVUBA2U7v0+AB3BBOc9hJdGfy5uupgDV0WjdRt5Nkbee2KEDAcdEcKjj0EnkbnqOtfSFKfqEhZXTVJEArhg3vtuxOzMdDHz21WAwvkb9j8sKFGFwYsXpxqwnPU7O95lfspnOoKqzMDpambQxJ1VQWqF3vVdu/AxhAg9Bj1hcOL0r3uzcmTVWxIyzKVkjZgodRTEEqGV1YatILVQcbA7sPGLCXKyODI0GWl8NNzmTUQFFkc5BfUv3Rd364p8SFzrCIw7aS2rtuDQGx9DS/oMNPHbtGRnSofjyLE0uXy5O5oZkHsLPbMX2BxPizE0bBZmijhRl1wI8UhpKUxqAzOCwBUkke8dR74pspmWidZENMpsEgEX8QbBHwOGySbN7nzhfSvk31KPU0pdmZu7EsfmSSf5nBjwcGLkwxP4bxZ4Fbl1qMkMgY+DCWYCvIJbf5fHEDBjGk1TBNrdF4c7lZE5bRzRKs00qCMo4USrCCh1AXp5Wx9Dv64kcP8AaQxSQokkyZdImjZFYjUZFk1yFA2ktrlNeQEX0ws/DIRGQ5QBF/bI2ssdWk7KSHGsnY0QNO485tDRBIBojY3R+Bog18iMc2KUMqdJ7Nrc6c0JYmra3Sexoos/lk+rTamd8vEgEASgZVkklt5C1aNcl0ASara7D5mjEUJbMROywZ0PRezLPHPWzIvfUg+ZrFOMzlrDHLuT5jEpEd+otTJp7dOq/wB7xgE2VfdopIj/ANE4Zf4ZLYfPWflh3D5/t99yev5GizOcTMwCKNl500BYgsFPOE+WMiEk0GcZZpAD3tfUYofaONFaJRHFHII7mWIkqJDJJQ95gGEfLsA7EkeMNrNlTSmCVR5kEoZ/4SgQj4bH97CrHkwCDJmSfBEUKgfNea2r+IYIx0+QlLUVmDF5w2HKoX5kscmoAR2k4KOSKaVBpUqBeoB2rwG7YgcYljaU8pVCqAtqCA7KOqQAk0GN0PAq97xVSt1QjjSuyFgwYMMKXPDOHjQsjLrLnoXSX8sBUYI5jkxvSkhFCFnsEA3HFyiww5iN0UhtKS87VIjKE1FArctkRm0PHGugqQygC8VHDpVeIo1AoCDYscvUWVyPIjd31jzFPJ+HFjHIKbV74UrICy2oU6SsjbKkYIIo6IewEc/c8GXU57vg7MdKGy5KHiuX0tqC6Vcno/zbqRrj+QJBHqrIfOIWNEuW1I0L0CpjS96GoH6u7agGFbwtqVTpeJq6cZ5lIJBBBBog7EEdwR646sU9UTmyRpiYMGHsrBrbTqVfi2r1AoBQWY79gCcVFGcGJnF8gYJWjJsgD0BFgWGUMdJBsUTe19iMQ8YnatGNUGFVSSAASTsBuSSdgAPXCYncDlKTxsF1UTY2HSVIZgTspCksGOwK2e2BulZq5FzfCZIwxJRim0qowZoTZFSAdjakbXR2NEjEDG0m4dPUkfKiBVHVdKxq6WyRqqFlDAMGI2Y9LaTTEA4sYlim5rcfJFRexb+zpTWR1CU2UYKjKiqrM7ENtelSOxoavNEV+eeNnYxKUQ7hSbrbcWPF3Xmqsnvh/gcypmImdtKB11E9tN0wP7pBIPwJxFzGXaN2jcaXRijL6MpIIsfEHDpfmbFv8o3hVFkfE4TCodwfiMM+NjI1e46kQ1MDe2rt32wRQhmrcD49/T09SMOBkBJDGzq3o7X/ADx45tA02omtyL23Pn5DHJqm7q7aXnnudqhjVaqpN3TT27BDCCBdgltI+HbvgGX2BvuG/IgNX5Gv5HDpzI370xN0PBUX+YOPEcwG3caSPztqP8/54XVmabp/IfTgTStfMBApoC7K6t673QHbHnkgCzdUNvib/wCRx6LrWzWdGnse93/xx6eYN50+6b9GF3/vYE8nvX7g44va/nsRZFAJANj1wmPc72xI+H8gBePGOyF6VfJwTpSdcWGDBgwwoYMGH8hk3mdY4wCzXVkAUqliSfgoJ/LA3W4Ieh4hphaLQDqJOok7XyzsB8YlN/PbEG8T8ksKurNmYaFn3cw1GjpNcmjRo15rFq3FNROjPwAEnSpyruVBOw1HLktXa/NY53OMG9K53LaZTS1PjYzd4XGz9oM4Ghdo3QIVCafq7Rs0jvqJVzAlKERlq/O53GMZimPI5xtqhMkNDq7DBhMPwZWR/wBnG7/3VZv8BilijODE8cEzP+jT/wCyk/8ALhDwXM/6PP8A7KT/AMuF1LyGl+CDgxMPCcx/o83+zf8A5YbfITDdoZB80cf8MbqQUxvLzNGwde6mx5HyI8gjYjyCRjQR5uNQG1rGum4y5lOyjQFuNS3OivRq6GaMxkOm+rNtt3/TD8OY0gqVV1JDaW1UGH3hpIINbHeiO4NCp5MetD456WXXErmy8WiULC7OZWddFMhIACrYIpmIjjuixLEk6sVfFtRfmFHVZKKs60ZAAAZLqiWPUasW2I+ZzDSG3NkAKOwCqOyqBsqj0AAxIk4k8gRZSXSMKqqNKkKq6QFfSSPBPeyASDjIQcAlJSIVYfyGaMUqSqLKMGAsi6N0SN6Pb88S8pk8vJrJn5QVSyq4smgKGobHcnYC6FgE7Yj5XLKwBYvbNoRI4+a7sACaXUuwtR3JJOwNGnco07FUXex4zWaaQiwFA7KoNC++5ssT5ZiSfJwxi5Ps+xHTIL8oyPzB80iEhxGzPBpUYKTGCewMiIx+SSFW/ljI5I9ma4y7or8WPBpGQyPG4SVUqO3WPdyFYhmYDZC1C+5B8Yh5nLPGadGU9xqBFi6seosHcYawzWpUKnTLDhUE0MqyK0epTf8AaIBYNhlLc3swJB38nETORKsjqjalVmVW72oYgEHsbAGGsIcEY0a3Y9lr1rpCk6loNWkmxQa/Hr8MS/aFKzM46v2sh6gQTbE2b33uxfgjETJSRq6mQakB3X129LF0aNWLqrF3hMxmWlYu7amPc7eBQFDYAAAAAUAAMZT1WHYabti39oEVWChVWjNuqqtos8saAhQASBH3O5ve8VDdsXntbHpmA391jvX3p5mrYncWVPxU1Yokl+pfUF+llJgwYMOKGDFvxB0mXLpBEQ+mqDKzWCVCUEWydOuzZJlI7AAM8O4LLM0aqAolAZHY0pBmEF7AnZzVVfnyLVTVW9jdO+25XYMXKcJiCNI0rSKIxKnLXSHTnLC1s+6MGPbQRW9nEpcpBrREgLc3LPKjSSuzcwRyEDo0DaSJk7b4V5ENoZnMJjc5LhsZLSQKo6YpI1IBMcsmXkEagnw0s0BX96Nh93fNcYJdYZ2k5hkUqzFdLFo9IOoknmGnUa9r09tsEcik6BwaVlZgwYMUEDDkGYaNg6HSy3R/Kj37ggkEehOG8WfDOENKusg6DYWioLMNNgWdgA13/wCwsmkrZqTb2LjjHF819Y5EMqroRFJKRfaNVlgNBNnV2HpiPmuJZ+JdUkyVdAHLrufQFoAvx7+MTJ+GCXQZctIzIgTWuajQsATRYcprber84b/oKMdspL/3pP8Ahl8cUXG9/wCx0S1diqzPEpZYH1lf2kQ6Y40sFZjRKKLFqpr4DFTjZLweNwIhlniDuhZ+eXIrULrkVsHbGNBx145Rd0iM01yTOEPpl1CrSOZxYBpkgkdTR22ZQfywZLi2cbUsbyzEKXYFOeQq9261Yqovc7D1wnDB1N/1GZ//AFpsSOD8R+r5ZpEQc3nIDJZDppeGaMDetLciexXcL6UY5ueB8fHI9xSPMQTmHMGIUdPMTKwSKzAKSqfZAsQWANdjjQZrgJQS0rErzwp+oxH3JY1U+4Ax0lv712O2Kniebk4hBMwpFgp6Yk9xmpGVKG7H0/dPpixzmdyh5vXAdZzXaOZr1PG4scyjqK/AMe1VjmbexdUe81whk5pXmDQZqrI5UikaEDvV7SNvtem9qo0/D85m5i5y8nQkbvrbLQR2UAJjXQrgudS0L8+MSOM8dh0PyRGzM0hIOWNMJBAT1F+9xGzRuhtsCZC5+XhSQxNTlhzQUbp1CUEEEjcgJpO3cEYE3XuDS+hT5fP5tp3inkmDNHMGicsgs5eTSDFsB909vQ4qMaDJziSTJOUAfeNmslpFVIog7nzbiYD4LjPDHZh7nNlFwYMGLkwxaaKEoW9SZNSvqRLJE8pHyimlB/dDehxV4l5bO6dOoE6PcdGMckdkmkkF7WSaYMBZqrNzyRclsPCST3Dg3D8vJG7TzCMhlC7jYaWJbl0Wk30ilqt7O4wnD3ZnaASl4SJaB1BOlHZZAh9wgqG9asdicTGnge9TA3v9pl0FH4ywOrt8yv5Yb0KAwjkyqFgVLKM0W0kUQDIhC2LBqiQSOxIxzqErbd/wWclSSr+T1kMkr5eFWlSPrzElsVHSfq8YC6iATqRzVjscSouCQlJScwNSLqU6odPejYSR2ayVWgAba96o1ObKgRoragiBSwBAJLO7UCAaBcjcD3cR8WjCVc0RclfAYtJOIaIoI70Bo2fmKOoMZ5l6/wAa0i/EVt5VqvEuYQyLHqeRSiaCFiRwftJHsEyr+PtXjG5FaQQdMlpmp4aebMNpItEjkUtKO1hhfLSxuxF2CALDaW+MZ950gkkrVy2Ta9gsshAs2TQarJJNbknfET6nlv8APTf93T/1GFmkUcsRksIwd3RRZLs26amBG4G533wkItSuh5S2oZdCK1AiwGFgi1PYi+4Prj0itIwUWzMQo8k9gB/gMT87x2aSt9AHhS27a2k1WxJu29aFCqxAknYsXLHUfvXvZFd8WVvkk67Er+jSQdEsUjKCWRGbVQBJI1KA9AE9BbYX23xBxfDikAKkGQLG8UiRcuPSpQdSiTXfU1dVbjcgmsU0E+gkhVNgjqUMBfkA7X8774yLfc2SXYcE5CRMsnWjvpAq0rlsrA992LfmvzxqM7xuJUYRMoPJSaEDflyyZkTSQ7dq+z7+IPjjIyzM1amLaVCiyTSjso9APTHjGSxqVWCm1wabO8Yy8k7yHmBSk0OmNF0tGwblFVLLyyCwLACiyX981V5fi2hoGEakwaguotTXI8i6gpB2aRtgd8VuDGrGkqBzbJknE5CKU6F0LHpXVWhZOao6iSdLVRJvYb4azmcklbVLI8jVWp2LGt9rPiyT+ZwxgwySRjbYYMGDGmBj0shHYkfInHg4UYDSbnY1lbWMwiWqAowmtSqBSBpRlK9O291VgYnZI5VYSjiF5eoLIRPW42LDlmyCT2rsPicUpwYm+niOsjJ3D4Io5EYzxUrqx6ZjYDAkVyvhiAWJ3Ykk7kncknvZwHCDDJUK2TOFzoklyaihWRG00WCyxPGSoJAJAe6JF13GJvCMhE4mjSV21xH9pHHEispUxszmdgvXpS/SUjzioGNF7DRK80iuoZTFurAEH7SI7g7HffE8sVTY2N9heBZd8pG80hYdaDTGUmCgEMXfRMoQltCq13748jE4e1UX48z+sn/qjid7UZGKPKTGONEJMYJVVUkc1NiQO2w2+GOfYjHBDLvNFfxGTFtBmzPtVGOzzfnzj/4of44r/aHITZrlTpZLqQwlaOCypAEiI8ppGXSLB3MTE98Z7HTeD8Nhky0LSRRu3JXqZFY7WBuRewAH5YyeCGJfkQevPL+tmUzRgy+YU6pTyAvLQRR6HCrasJBMel2PMLBT752xm8XHteoGYKgUFWMADYAaRsB4xUHHTjWyfsiM+QwYBhcUEEwYXCHAAYMJj0MACYMKMGABMGEwuAAwYU4MACYMBwgwALgwowDAAmDAcJgAXBgwpwAJgwpx5OABcGEwYAP/2Q==",
          price: "999.000",
          course_chapter: [
            {
              id: 1,
              title: "Chapter 1",
              numericalOrder: 1,
              lesson: [
                {
                  id: 1,
                  title: "Lesson 1.1",
                  pdfUrl: "/pdf/lesson1.1.pdf",
                  videoUrl: "/videos/lesson1.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 2,
                  title: "Lesson 1.2",
                  pdfUrl: "/pdf/lesson1.2.pdf",
                  videoUrl: "/videos/lesson1.2.mp4",
                  numericalOrder: 2
                },
                {
                  id: 3,
                  title: "Lesson 1.2",
                  pdfUrl: "/pdf/lesson1.2.pdf",
                  videoUrl: "/videos/lesson1.2.mp4",
                  numericalOrder: 2
                }
              ]
            },
            {
              id: 2,
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 3,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 4,
                  title: "Lesson 2.2",
                  pdfUrl: "/pdf/lesson2.2.pdf",
                  videoUrl: "/videos/lesson2.2.mp4",
                  numericalOrder: 2
                }
              ]
            },
            {
              id: 99,
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 100,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 101,
                  title: "Lesson 2.2",
                  pdfUrl: "/pdf/lesson2.2.pdf",
                  videoUrl: "/videos/lesson2.2.mp4",
                  numericalOrder: 2
                }
              ]
            }
          ]
        },
        {
          id: 1,
          name: "Course 3",
          lessonQuantity: 10,
          des: "Description of Course 1",
          studyTime: "2 hours",
          studyLevel: "Intermediate",
          img: "https://www.eastsidernews.org.au/wp-content/uploads/2023/06/English-language.jpg",
          price: "999.000",
          course_chapter: [
            {
              id: 1,
              title: "Chapter 1",
              numericalOrder: 1,
              lesson: [
                {
                  id: 1,
                  title: "Lesson 1.1",
                  pdfUrl: "/pdf/lesson1.1.pdf",
                  videoUrl: "/videos/lesson1.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 2,
                  title: "Lesson 1.2",
                  pdfUrl: "/pdf/lesson1.2.pdf",
                  videoUrl: "/videos/lesson1.2.mp4",
                  numericalOrder: 2
                },
                {
                  id: 3,
                  title: "Lesson 1.2",
                  pdfUrl: "/pdf/lesson1.2.pdf",
                  videoUrl: "/videos/lesson1.2.mp4",
                  numericalOrder: 2
                }
              ]
            },
            {
              id: 2,
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 3,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 4,
                  title: "Lesson 2.2",
                  pdfUrl: "/pdf/lesson2.2.pdf",
                  videoUrl: "/videos/lesson2.2.mp4",
                  numericalOrder: 2
                }
              ]
            },
            {
              id: 99,
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 100,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 101,
                  title: "Lesson 2.2",
                  pdfUrl: "/pdf/lesson2.2.pdf",
                  videoUrl: "/videos/lesson2.2.mp4",
                  numericalOrder: 2
                }
              ]
            }
          ]
        },
        {
          id: 1,
          name: "Course 4",
          lessonQuantity: 10,
          des: "Description of Course 1",
          studyTime: "2 hours",
          studyLevel: "Intermediate",
          img: "https://www.eastsidernews.org.au/wp-content/uploads/2023/06/English-language.jpg",
          price: "999.000",
          course_chapter: [
            {
              id: 1,
              title: "Chapter 1",
              numericalOrder: 1,
              lesson: [
                {
                  id: 1,
                  title: "Lesson 1.1",
                  pdfUrl: "/pdf/lesson1.1.pdf",
                  videoUrl: "/videos/lesson1.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 2,
                  title: "Lesson 1.2",
                  pdfUrl: "/pdf/lesson1.2.pdf",
                  videoUrl: "/videos/lesson1.2.mp4",
                  numericalOrder: 2
                },
                {
                  id: 3,
                  title: "Lesson 1.2",
                  pdfUrl: "/pdf/lesson1.2.pdf",
                  videoUrl: "/videos/lesson1.2.mp4",
                  numericalOrder: 2
                }
              ]
            },
            {
              id: 2,
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 3,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 4,
                  title: "Lesson 2.2",
                  pdfUrl: "/pdf/lesson2.2.pdf",
                  videoUrl: "/videos/lesson2.2.mp4",
                  numericalOrder: 2
                }
              ]
            },
            {
              id: 99,
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 100,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 101,
                  title: "Lesson 2.2",
                  pdfUrl: "/pdf/lesson2.2.pdf",
                  videoUrl: "/videos/lesson2.2.mp4",
                  numericalOrder: 2
                }
              ]
            }
          ]
        },
      ]

    },
    {
      id: 889,
      nameCategory: "category 2",
      listCourse: [
        {
          id: 1,
          name: "Course 1",
          lessonQuantity: 10,
          des: "Description of Course 1",
          studyTime: "2 hours",
          studyLevel: "Intermediate",
          img: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2019_09_english.jpg",
          price: "999.000",
          course_chapter: [
            {
              id: 1,
              title: "Chapter 1",
              numericalOrder: 1,
              lesson: [
                {
                  id: 1,
                  title: "Lesson 1.1",
                  pdfUrl: "/pdf/lesson1.1.pdf",
                  videoUrl: "/videos/lesson1.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 2,
                  title: "Lesson 1.2",
                  pdfUrl: "/pdf/lesson1.2.pdf",
                  videoUrl: "/videos/lesson1.2.mp4",
                  numericalOrder: 2
                },
                {
                  id: 3,
                  title: "Lesson 1.2",
                  pdfUrl: "/pdf/lesson1.2.pdf",
                  videoUrl: "/videos/lesson1.2.mp4",
                  numericalOrder: 2
                }
              ]
            },
            {
              id: 2,
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 3,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 4,
                  title: "Lesson 2.2",
                  pdfUrl: "/pdf/lesson2.2.pdf",
                  videoUrl: "/videos/lesson2.2.mp4",
                  numericalOrder: 2
                }
              ]
            },
            {
              id: 99,
              title: "Chapter 2",
              numericalOrder: 2,
              lesson: [
                {
                  id: 100,
                  title: "Lesson 2.1",
                  pdfUrl: "/pdf/lesson2.1.pdf",
                  videoUrl: "/videos/lesson2.1.mp4",
                  numericalOrder: 1
                },
                {
                  id: 101,
                  title: "Lesson 2.2",
                  pdfUrl: "/pdf/lesson2.2.pdf",
                  videoUrl: "/videos/lesson2.2.mp4",
                  numericalOrder: 2
                }
              ]
            }
          ]
        },
        {
          id: 1,
          name: "Course 5",
          lessonQuantity: 10,
          des: "Description of Course 1",
          studyTime: "2 hours",
          studyLevel: "Intermediate",
          img: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2019_09_english.jpg",
          price: "999.000",
          course_chapter: [
              {
                  id: 1,
                  title: "Chapter 1",
                  numericalOrder: 1,
                  lesson: [
                      {
                          id: 1,
                          title: "Lesson 1.1",
                          pdfUrl: "/pdf/lesson1.1.pdf",
                          videoUrl: "/videos/lesson1.1.mp4",
                          numericalOrder: 1
                      },
                      {
                          id: 2,
                          title: "Lesson 1.2",
                          pdfUrl: "/pdf/lesson1.2.pdf",
                          videoUrl: "/videos/lesson1.2.mp4",
                          numericalOrder: 2
                      },
                      {
                          id: 3,
                          title: "Lesson 1.2",
                          pdfUrl: "/pdf/lesson1.2.pdf",
                          videoUrl: "/videos/lesson1.2.mp4",
                          numericalOrder: 2
                      }
                  ]
              },
              {
                  id: 2,
                  title: "Chapter 2",
                  numericalOrder: 2,
                  lesson: [
                      {
                          id: 3,
                          title: "Lesson 2.1",
                          pdfUrl: "/pdf/lesson2.1.pdf",
                          videoUrl: "/videos/lesson2.1.mp4",
                          numericalOrder: 1
                      },
                      {
                          id: 4,
                          title: "Lesson 2.2",
                          pdfUrl: "/pdf/lesson2.2.pdf",
                          videoUrl: "/videos/lesson2.2.mp4",
                          numericalOrder: 2
                      }
                  ]
              },
              {
                  id: 99,
                  title: "Chapter 2",
                  numericalOrder: 2,
                  lesson: [
                      {
                          id: 100,
                          title: "Lesson 2.1",
                          pdfUrl: "/pdf/lesson2.1.pdf",
                          videoUrl: "/videos/lesson2.1.mp4",
                          numericalOrder: 1
                      },
                      {
                          id: 101,
                          title: "Lesson 2.2",
                          pdfUrl: "/pdf/lesson2.2.pdf",
                          videoUrl: "/videos/lesson2.2.mp4",
                          numericalOrder: 2
                      }
                  ]
              }
          ]
      },
      {
        id: 1,
        name: "Course 6",
        lessonQuantity: 10,
        des: "Description of Course 1",
        studyTime: "2 hours",
        studyLevel: "Intermediate",
        img: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2019_09_english.jpg",
        price: "999.000",
        course_chapter: [
            {
                id: 1,
                title: "Chapter 1",
                numericalOrder: 1,
                lesson: [
                    {
                        id: 1,
                        title: "Lesson 1.1",
                        pdfUrl: "/pdf/lesson1.1.pdf",
                        videoUrl: "/videos/lesson1.1.mp4",
                        numericalOrder: 1
                    },
                    {
                        id: 2,
                        title: "Lesson 1.2",
                        pdfUrl: "/pdf/lesson1.2.pdf",
                        videoUrl: "/videos/lesson1.2.mp4",
                        numericalOrder: 2
                    },
                    {
                        id: 3,
                        title: "Lesson 1.2",
                        pdfUrl: "/pdf/lesson1.2.pdf",
                        videoUrl: "/videos/lesson1.2.mp4",
                        numericalOrder: 2
                    }
                ]
            },
            {
                id: 2,
                title: "Chapter 2",
                numericalOrder: 2,
                lesson: [
                    {
                        id: 3,
                        title: "Lesson 2.1",
                        pdfUrl: "/pdf/lesson2.1.pdf",
                        videoUrl: "/videos/lesson2.1.mp4",
                        numericalOrder: 1
                    },
                    {
                        id: 4,
                        title: "Lesson 2.2",
                        pdfUrl: "/pdf/lesson2.2.pdf",
                        videoUrl: "/videos/lesson2.2.mp4",
                        numericalOrder: 2
                    }
                ]
            },
            {
                id: 99,
                title: "Chapter 2",
                numericalOrder: 2,
                lesson: [
                    {
                        id: 100,
                        title: "Lesson 2.1",
                        pdfUrl: "/pdf/lesson2.1.pdf",
                        videoUrl: "/videos/lesson2.1.mp4",
                        numericalOrder: 1
                    },
                    {
                        id: 101,
                        title: "Lesson 2.2",
                        pdfUrl: "/pdf/lesson2.2.pdf",
                        videoUrl: "/videos/lesson2.2.mp4",
                        numericalOrder: 2
                    }
                ]
            }
        ]
    },
      ]

    }
  ]


  return (
    <div className="home_container">
      <div className="home-container_right">
        <CarouselComponent />
        <Course categoryCourseData={categoryCourseData} />
        <Blog />
        <FeatureVideo />
      </div>
    </div>
  )
}
