dataSetVersion = "2020-02-13"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Agency",
    key: "agency",
    tooltip: "Check this to restrict to certain agencies.",
    checked: false,
    sub: [
      { name: "Hololive (ホロライブ)", key: "hololive" },
      { name: "Nijisanji (にじさんじ)", key: "nijisanji" },
    ]
  },
  {
    name: "Filter by Status",
    key: "status",
    tooltip: "Check this to restrict to the current virtual youtuber status.",
    checked: false,
    sub: [
      { name: "Active", key: "active" },
      { name: "Retired", key: "retired" },
      { name: "Suspended", key: "suspended" },
    ]
  },
  {
    name: "Filter by Gender",
    key: "gender",
    tooltip: "Check this to restrict to certain genders.",
    checked: false,
    sub: [
      { name: "Male", key: "male" },
      { name: "Female", key: "female" },
      { name: "None", key: "none" },
      { name: "Unknown", key: "unknown" },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Tokino Sora",
    img: "EkkljRm.png",
    channel: "https://www.youtube.com/channel/UCp6993wxpyDPHUpavwDFqgg",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Roboco",
    img: "SKOT3s8.png",
    channel: "https://www.youtube.com/channel/UCDqI2jOz0weumE8s7paEk6g",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Sakura Miko",
    img: "JO21EvU.png",
    channel: "https://www.youtube.com/channel/UC-hM6YJuNYVAmUWxeIr9FeA",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Akai Haato",
    img: "LBShW8y.png",
    channel: "https://www.youtube.com/channel/UC1CfXB_kRs3C-zaeTG3oGyg",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Yozora Mel",
    img: "dJ9CGHp.png",
    channel: "https://www.youtube.com/channel/UCD8HOxPs4Xvsm8H0ZxXGiBw",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Natsuiro Matsuri",
    img: "uEeWw7y.png",
    channel: "https://www.youtube.com/channel/UCQ0UDLQCjY0rmuxCDE38FGg",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Aki Rosenthal",
    img: "43NO6sC.png",
    channel: "https://www.youtube.com/channel/UCFTLzh12_nrtzqBPsTCqenA",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Shirakami Fubuki",
    img: "WxqLOr3.png",
    channel: "https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Oozora Subaru",
    img: "bQ9loIN.png",
    channel: "https://www.youtube.com/channel/UCvzGlP9oQwU--Y0r9id_jnA",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Yuzuki Choco",
    img: "tfKf1PP.png",
    channel: "https://www.youtube.com/channel/UC1suqwovbL1kzsoaZgFZLKg",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Murasaki Shion",
    img: "JnjgjIH.png",
    channel: "https://www.youtube.com/channel/UCXTpFs_3PqI41qX2d9tL2Rw",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Nakiri Ayame",
    img: "kKE2YXU.png",
    channel: "https://www.youtube.com/channel/UC7fk0CB07ly8oSl0aqKkqFg",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Minato Aqua",
    img: "JHezCPy.png",
    channel: "https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Ookami Mio",
    img: "shkpGS9.png",
    channel: "https://www.youtube.com/channel/UCp-5t9SrOQwXMU7iIjQfARg",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Nekomata Okayu",
    img: "Vpmmit8.png",
    channel: "https://www.youtube.com/channel/UCvaTdHTWBGv3MKj3KVqJVCw",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Inugami Korone",
    img: "oAdQEQP.png",
    channel: "https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "AZKi",
    img: "ebVsilD.png",
    channel: "https://www.youtube.com/channel/UC0TXe_LYZ4scaW2XMyi5_kw",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Hoshimachi Suisei",
    img: "QEUu5KZ.png",
    channel: "https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Usada Pekora",
    img: "GXqxhjk.png",
    channel: "https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Uruha Rushia",
    img: "EFU18LJ.png",
    channel: "https://www.youtube.com/channel/UCl_gCybOJRIgOXw6Qb4qJzQ",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Shiranui Flare",
    img: "FnmF3La.png",
    channel: "https://www.youtube.com/channel/UCvInZx9h3jC2JzsIzoOebWg",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Shirogane Noel",
    img: "cjvCTAd.png",
    channel: "https://www.youtube.com/channel/UCdyqAaZDKHXg4Ahi7VENThQ",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Houshou Marine",
    img: "qlaYSNc.png",
    channel: "https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Tsunomaki Watame",
    img: "qeoByAh.png",
    channel: "https://www.youtube.com/channel/UCqm3BQLlJfvkTsX_hvm0UmA",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Tokoyami Towa",
    img: "ucabEkP.png",
    channel: "https://www.youtube.com/channel/UC1uv2Oq6kNxgATlCiez59hw",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Kiryu Coco",
    img: "1RLf2jf.png",
    channel: "https://www.youtube.com/channel/UCS9uQI-jC3DE0L4IpXyvr6w",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Amane Kanata",
    img: "uBPxTsR.png",
    channel: "https://www.youtube.com/channel/UCZlDXzGoo7d44bwdNObFacg",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Himemori Luna",
    img: "nkm0s2H.png",
    channel: "https://www.youtube.com/channel/UCa9Y57gfeY0Zro_noHRVrnw",
    opts: {
      agency: ['hololive'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Tsukino Mito",
    img: "8CjmWen.png",
    channel: "https://www.youtube.com/channel/UCD-miitqNY3nyukJ4Fnf4_A",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Honma Himawari",
    img: "mIxhWJd.png",
    channel: "https://www.youtube.com/channel/UC0g1AE0DOjBYnLhkgoRWN1w",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Sasaki Saku",
    img: "2G3ryuZ.png",
    channel: "https://www.youtube.com/channel/UCoztvTULBYd3WmStqYeoHcA",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Otogibara Era",
    img: "Zr9MdAY.png",
    channel: "https://www.youtube.com/channel/UCwQ9Uv-m8xkE5PzRc7Bqx3Q",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Shiina Yuika",
    img: "FZkrxWw.png",
    channel: "https://www.youtube.com/channel/UC_4tXjqecqox5Uc05ncxpxg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Higuchi Kaede",
    img: "fDRjMLj.png",
    channel: "https://www.youtube.com/channel/UCsg-YqdqQ-KFF0LNk23BY4A",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Shizuka Rin",
    img: "I51FoFd.png",
    channel: "https://www.youtube.com/channel/UC6oDys1BGgBsIC3WhG1BovQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Yuzuki Roa",
    img: "HKCxRow.png",
    channel: "https://www.youtube.com/channel/UCCVwhI5trmaSxfcze_Ovzfw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Lize Helesta",
    img: "tSiDDBM.png",
    channel: "https://www.youtube.com/channel/UCZ1xuCK1kNmn5RzPYIZop3w",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Ryushen",
    img: "8RybFJJ.png",
    channel: "https://www.youtube.com/channel/UCt5-0i4AVHXaWJrL8Wql3mw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['unknown'],
    }
  },
  {
    name: "Suzuka Utako",
    img: "4puVJZN.png",
    channel: "https://www.youtube.com/channel/UCwokZsOK_uEre70XayaFnzA",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Ange Katrina",
    img: "rqMriXR.png",
    channel: "https://www.youtube.com/channel/UCHVXbQzkl3rDfsXWo8xi2qw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Kuzuha",
    img: "unEUPpg.png",
    channel: "https://www.youtube.com/channel/UCSFCh5NL4qXrAy9u-u2lX3g",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Suzuhara Lulu",
    img: "KLTVZW3.png",
    channel: "https://www.youtube.com/channel/UC_a1ZYZ8ZTXpjg9xUY9sj8w",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Ars Almal",
    img: "vgaZjBn.png",
    channel: "https://www.youtube.com/channel/UCdpUojq0KWZCN9bxXnZwz5w",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Belmond Banderas",
    img: "KD7RNlJ.png",
    channel: "https://www.youtube.com/channel/UCbc8fwhdUNlqi-J99ISYu4A",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Inui Toko",
    img: "Z55ozCT.png",
    channel: "https://www.youtube.com/channel/UCXRlIK3Cw_TJIQC5kSJJQMg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Rindou Mikoto",
    img: "VDjl0eK.png",
    channel: "https://www.youtube.com/channel/UCPvGypSgfDkVe7JG2KygK7A",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Kanae",
    img: "4zuHGQn.png",
    channel: "https://www.youtube.com/channel/UCspv01oxUFf_MTSipURRhkA",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Gundo Mirei",
    img: "0wHSeSi.png",
    channel: "https://www.youtube.com/channel/UCeShTCVgZyq2lsBW9QwIJcw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Yashiro Kizuku",
    img: "Oh23qlA.png",
    channel: "https://www.youtube.com/channel/UCKMYISTJAQ8xTplUPHiABlA",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Sister Claire",
    img: "YDAlKCM.png",
    channel: "https://www.youtube.com/channel/UC1zFJrfEKvCixhsjNSb1toQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Takamiya Rion",
    img: "r2nQHl4.png",
    channel: "https://www.youtube.com/channel/UCV5ZZlLjk5MKGg3L0n0vbzw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Dola",
    img: "7Y7gmdD.png",
    channel: "https://www.youtube.com/channel/UC53UDnhAAYwvNO7j_2Ju1cQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Mononobe Alice",
    img: "w1iEQst.png",
    channel: "https://www.youtube.com/channel/UCt0clH12Xk1-Ej5PXKGfdPA",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Mayuzumi Kai",
    img: "Leh0Lio.png",
    channel: "https://www.youtube.com/channel/UCb5JxV6vKlYVknoJB8TnyYg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Yuuki Chihiro",
    img: "XMG5Qyr.png",
    channel: "https://www.youtube.com/channel/UCLO9QDxVL4bnvRRsz6K4bsQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Morinaka Kazaki",
    img: "vjO8on3.png",
    channel: "https://www.youtube.com/channel/UCtpB6Bvhs1Um93ziEDACQ8g",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Ex Albio",
    img: "unQeC0q.png",
    channel: "https://www.youtube.com/channel/UCIytNcoz4pWzXfLda0DoULQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Warabeda Meiji",
    img: "UkYvTd7.png",
    channel: "https://www.youtube.com/channel/UCveZ9Ic1VtcXbsyaBgxPMvg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Kagami Hayato",
    img: "n4KjGW3.png",
    channel: "https://www.youtube.com/channel/UCmovZ2th3Sqpd00F5RdeigQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Debidebi Debiru",
    img: "1TPSHUf.png",
    channel: "https://www.youtube.com/channel/UCP19rQ5V-46B-6ZeLDJqp5w",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['none'],
    }
  },
  {
    name: "Joe Rikiichi",
    img: "dOnjiXo.png",
    channel: "https://www.youtube.com/channel/UChUJbHiTVeGrSkTdBzVfNCQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Yorumi Rena",
    img: "qbFKCaL.png",
    channel: "https://www.youtube.com/channel/UCL34fAoFim9oHLbVzMKFavQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Kenmochi Toya",
    img: "1MARerM.png",
    channel: "https://www.youtube.com/channel/UCv1fFr156jc65EMiLbaLImw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Hanabatake Chaika",
    img: "91j7KNp.png",
    channel: "https://www.youtube.com/channel/UCsFn_ueskBkMCEyzCEqAOvg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Elu",
    img: "2KxuOqE.png",
    channel: "https://www.youtube.com/channel/UCYKP16oMX9KKPbrNgo_Kgag",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Sukoya Kana",
    img: "OP4NE6f.png",
    channel: "https://www.youtube.com/channel/UC8C1LLhBhf_E2IBPLSDJXlQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Maimoto Keisuke",
    img: "ZrSgGDa.png",
    channel: "https://www.youtube.com/channel/UCJubINhCcFXlsBwnHp0wl_g",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Yumeoi Kakeru",
    img: "Hjajq62.png",
    channel: "https://www.youtube.com/channel/UCTIE7LM5X15NVugV7Krp9Hw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Ushimi Ichigo",
    img: "iBmPhXL.png",
    channel: "https://www.youtube.com/channel/UCmUjjW5zF1MMOhYUwwwQv9Q",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Nui Sociere",
    img: "EfEwdzF.png",
    channel: "https://www.youtube.com/channel/UCUc8GZfFxtmk7ZwSO7ccQ0g",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Hoshikawa Sara",
    img: "z1nOSsG.png",
    channel: "https://www.youtube.com/channel/UC9V3Y3_uzU5e-usObb6IE1w",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Saegusa Akina",
    img: "09mJs2A.png",
    channel: "https://www.youtube.com/channel/UCNW1Ex0r6HsWRD4LCtPwvoQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Sakura Ritsuki",
    img: "0k8UYXe.png",
    channel: "https://www.youtube.com/channel/UCfQVs_KuXeNAlGa3fb8rlnQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Hakase Fuyuki",
    img: "WPAOcIt.png",
    channel: "https://www.youtube.com/channel/UCGYAYLDE7TZiiC8U6teciDQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Ienaga Mugi",
    img: "GjBa9KJ.png",
    channel: "https://www.youtube.com/channel/UC_GCs6GARLxEHxy1w40d6VQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Uzuki Kou",
    img: "umxTkV6.png",
    channel: "https://www.youtube.com/channel/UC3lNFeJiTq6L3UWoz4g1e-A",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Makaino Ririmu",
    img: "I8pQoW5.png",
    channel: "https://www.youtube.com/channel/UC9EjSJ8pvxtvPdxLOElv73w",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Emma August",
    img: "PZozt0K.png",
    channel: "https://www.youtube.com/channel/UCl1oLKcAq93p-pwKfDGhiYQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Kanda Shoichi",
    img: "43oZykC.png",
    channel: "https://www.youtube.com/channel/UCWz0CSYCxf4MhRKPDm220AQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Yuhi Riri",
    img: "CC80W8w.png",
    channel: "https://www.youtube.com/channel/UC48jH1ul-6HOrcSSfoR02fQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Aiba Uiha",
    img: "V7mVnOx.png",
    channel: "https://www.youtube.com/channel/UCnRQYHTnRLSF0cLJwMnedCg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Moira",
    img: "SxdkJDE.png",
    channel: "https://www.youtube.com/channel/UCvmppcdYf4HOv-tFQhHHJMA",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Shellin Burgundy",
    img: "OIeyCj9.png",
    channel: "https://www.youtube.com/channel/UCHBhnG2G-qN0JrrWmMO2FTA",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Amemori Sayo",
    img: "ItiFibs.png",
    channel: "https://www.youtube.com/channel/UCRWOdwLRsenx2jLaiCAIU4A",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Aizono Manami",
    img: "BC1DbeF.png",
    channel: "https://www.youtube.com/channel/UC0WwEfE-jOM2rzjpdfhTzZA",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Kuroi Shiba",
    img: "QcBH7OP.png",
    channel: "https://www.youtube.com/channel/UCmeyo5pRj_6PXG-CsGUuWWg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['unknown'],
    }
  },
  {
    name: "Akabane Youko",
    img: "kdjbjVa.png",
    channel: "https://www.youtube.com/channel/UCBi8YaVyZpiKWN3_Z0dCTfQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Ratna Petit",
    img: "Jx1U3Ef.png",
    channel: "https://www.youtube.com/channel/UCIG9rDtgR45VCZmYnd-4DUw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Hayama Marin",
    img: "k6jSdCn.png",
    channel: "https://www.youtube.com/channel/UCfipDDn7wY-C-SoUChgxCQQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Amamiya Kokoro",
    img: "oFtHKzC.png",
    channel: "https://www.youtube.com/channel/UCkIimWZ9gBJRamKF0rmPU8w",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Mashiro",
    img: "Q6P8Avc.png",
    channel: "https://www.youtube.com/channel/UCfki3lMEF6SGBFiFfo9kvUA",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['unknown'],
    }
  },
  {
    name: "Fuwa Minato",
    img: "RFjF3IX.png",
    channel: "https://www.youtube.com/channel/UC6wvdADTJ88OfIbJYIpAaDA/",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Hayase Sou",
    img: "VgoxEJt.png",
    channel: "https://www.youtube.com/channel/UC2OacIzd2UxGHRGhdHl1Rhw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Eli Conifer",
    img: "gh1aFML.png",
    channel: "https://www.youtube.com/channel/UCpNH2Zk2gw3JBjWAKSyZcQQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Machita Chima",
    img: "LmuN8ou.png",
    channel: "https://www.youtube.com/channel/UCo7TRj3cS-f_1D9ZDmuTsjw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Fumino Tamaki",
    img: "gXtTCKX.png",
    channel: "https://www.youtube.com/channel/UCBiqkFJljoxAj10SoP2w2Cg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Izumo Kasumi",
    img: "MhZTm33.png",
    channel: "https://www.youtube.com/channel/UCLpYMk5h1bq8_GAFVBgXhPQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Matsukai Mao",
    img: "ZJ6Wlbu.png",
    channel: "https://www.youtube.com/channel/UCerkculBD7YLc_vOGrF7tKg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Shirayuki Tomoe",
    img: "qrxxzgb.png",
    channel: "https://www.youtube.com/channel/UCuvk5PilcvDECU7dDZhQiEw/",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Fumi",
    img: "AtNwMyt.png",
    channel: "https://www.youtube.com/channel/UCwrjITPwG4q71HzihV2C7Nw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Levi Elipha",
    img: "Bp0XQPb.png",
    channel: "https://www.youtube.com/channel/UCtnO2N4kPTXmyvedjGWdx3Q",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['unknown'],
    }
  },
  {
    name: "Fushimi Gaku",
    img: "dmkCu3o.png",
    channel: "https://www.youtube.com/channel/UCXU7YYxy_iQd3ulXyO-zC2w",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Onomachi Haruka",
    img: "iD1QCsI.png",
    channel: "https://www.youtube.com/channel/UCg63a3lk6PNeWhVvMRM_mrQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Yukishiro Mahiro",
    img: "L9JMXzq.png",
    channel: "https://www.youtube.com/channel/UCHX7YpFG8rVwhsHCx34xt7w",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Suzuki Masaru",
    img: "wY00VK5.png",
    channel: "https://www.youtube.com/channel/UCaF-mODqAziHivqg0Q61XKQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Luis Cammy",
    img: "BP80HdO.png",
    channel: "https://www.youtube.com/channel/UCb6ObE-XGCctO3WrjRZC-cw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Todoroki Kyoko",
    img: "MVRazkw.png",
    channel: "https://www.youtube.com/channel/UCRV9d6YCYIMUszK-83TwxVA",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Seto Miyako",
    img: "jw5LHPe.png",
    channel: "https://www.youtube.com/channel/UCHK5wkevfaGrPr7j3g56Jmw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Suzuya Aki",
    img: "DwtNHkq.png",
    channel: "https://www.youtube.com/channel/UCpnvhOIJ6BN-vPkYU9ls-Eg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Naraka",
    img: "BhVrBzC.png",
    channel: "https://www.youtube.com/channel/UC-o-E6I3IC2q8sAoAuM6Umg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Furen E Lustario",
    img: "kZDwaXO.png",
    channel: "https://www.youtube.com/channel/UCuep1JCrMvSxOGgGhBfJuYw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Shibuya Hajime",
    img: "YBErvbj.png",
    channel: "https://www.youtube.com/channel/UCeK9HFcRZoTrvqcUCtccMoQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Gilzaren III",
    img: "XPT54hH.png",
    channel: "https://www.youtube.com/channel/UCUzJ90o1EjqUbk2pBAy0_aw",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Achikita Chinami",
    img: "Wo2WU36.png",
    channel: "https://www.youtube.com/channel/UCuz0vzQgC8LRdS6lVV0UkUg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Asuka Hina",
    img: "xYLaRH2.png",
    channel: "https://www.youtube.com/channel/UCiSRx1a2k-0tOg-fs6gAolQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Gwelu Os Gar",
    img: "TfsZB3d.png",
    channel: "https://www.youtube.com/channel/UC1QgXt46-GEvtNjEC1paHnw/",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Yaguruma Rine",
    img: "L1QAfYh.png",
    channel: "https://www.youtube.com/channel/UCvzVB-EYuHFXHZrObB8a_Og",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Yamagami Karuta",
    img: "i7eNFtK.png",
    channel: "https://www.youtube.com/channel/UCllKI7VjyANuS1RXatizfLQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Azuchi Momo",
    img: "uAOwBD1.png",
    channel: "https://www.youtube.com/channel/UC6TfqY40Xt1Y0J-N18c85qQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Kurusu Natsume",
    img: "ACUgbBL.png",
    channel: "https://www.youtube.com/channel/UCRcLAVTbmx2-iNcXSsupdNA",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Melissa Kinrenka",
    img: "DAIDQId.png",
    channel: "https://www.youtube.com/channel/UCwcyyxn6h9ex4sMXGtpQE_g",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['unknown'],
    }
  },
  {
    name: "Ibrahim",
    img: "wyMwdev.png",
    channel: "https://www.youtube.com/channel/UCmZ1Rbthn-6Jm_qOGjYsh5A",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Harusaki Air",
    img: "9s4ZtaZ.png",
    channel: "https://www.youtube.com/channel/UCtAvQ5U0aXyKwm2i4GqFgJg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Kataribe Tsumugu",
    img: "32nT6sV.png",
    channel: "https://www.youtube.com/channel/UCufQu4q65z63IgE4cfKs1BQ",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['female'],
    }
  },
  {
    name: "Naruse Naru",
    img: "ERDa803.png",
    channel: "https://www.youtube.com/channel/UCoM_XmK45j504hfUWvN06Qg",
    opts: {
      agency: ['nijisanji'],
      status: ['active'],
      gender: ['male'],
    }
  },
  {
    name: "Yamiyono Moruru",
    img: "M8RfAPq.png",
    channel: "https://www.youtube.com/channel/UCNUgrFCo2Hr_VXc9bEwjcHQ",
    opts: {
      agency: ['nijisanji'],
      status: ['retired'],
      gender: ['female'],
    }
  },
  {
    name: "Setsuna",
    img: "LbUMFqN.png",
    channel: "https://www.youtube.com/channel/UCfM_A7lE6LkGrzx6_mOtI4g",
    opts: {
      agency: ['nijisanji'],
      status: ['retired'],
      gender: ['female'],
    }
  },
  {
    name: "Hassaku Yuzu",
    img: "dJ1IqdD.png",
    channel: "https://www.youtube.com/channel/UCFaDvgez8USXHiKidt0NtZg",
    opts: {
      agency: ['nijisanji'],
      status: ['retired'],
      gender: ['female'],
    }
  },
  {
    name: "Nakao Azuma",
    img: "K2fbt66.png",
    channel: "https://www.youtube.com/channel/UCks41vQN-hN-1KHmpZyPY3A",
    opts: {
      agency: ['nijisanji'],
      status: ['retired'],
      gender: ['unknown'],
    }
  },
  {
    name: "Naruto Kogane",
    img: "fVLchq3.png",
    channel: "https://www.youtube.com/channel/UCF1JdALrXgub24weQpqDy9Q",
    opts: {
      agency: ['nijisanji'],
      status: ['retired'],
      gender: ['unknown'],
    }
  },
  {
    name: "Umiyashanokami",
    img: "3h6vWNg.png",
    channel: "https://www.youtube.com/channel/UCqEp6RdtsMbUNrCdCswr6pA",
    opts: {
      agency: ['nijisanji'],
      status: ['retired'],
      gender: ['unknown'],
    }
  },
  {
    name: "Tsukimi Shizuku",
    img: "FwAbXq9.png",
    channel: "https://www.youtube.com/channel/UCqQV8xEBWd5SVZBLlYrS_5Q",
    opts: {
      agency: ['nijisanji'],
      status: ['retired'],
      gender: ['unknown'],
    }
  },
  {
    name: "Kudo Chitose",
    img: "L5c6Xix.png",
    channel: "https://www.youtube.com/channel/UCP2o-o6u4uX3uq1hXspl0rg",
    opts: {
      agency: ['nijisanji'],
      status: ['retired'],
      gender: ['female'],
    }
  },
  {
    name: "Shindou Raito",
    img: "LsSHB97.png",
    opts: {
      agency: ['nijisanji'],
      status: ['suspended'],
      gender: ['male'],
    }
  },
];
