$(function () {
    var countries = [
        {
            "code": "AF",
            "name": "阿富汗 | Afghanistan"
        }, {
            "code": "AX",
            "name": "奥兰群岛 | Åland Islands 测试"
        }, {
            "code": "AL",
            "name": "阿尔巴尼亚 | Albania 可以吗"
        }, {
            "code": "DZ",
            "name": "阿尔及利亚 | Algeria 试一试"
        }, {
            "code": "AS",
            "name": "美属萨摩亚 | American Samoa"
        }, {
            "code": "AD",
            "name": "安道尔 | Andorra"
        }, {
            "code": "AO",
            "name": "Angola | Angola"
        }, {
            "code": "AI",
            "name": "安圭拉 | Anguilla"
        }, {
            "code": "AQ",
            "name": "Antarctica"
        }, {
            "code": "AG",
            "name": "安提瓜和巴布达 | Antigua and Barbuda"
        }, {
            "code": "AR",
            "name": "阿根廷 | Argentina"
        }, {
            "code": "AM",
            "name": "亚美尼亚 | Armenia"
        }, {
            "code": "AW",
            "name": "阿鲁巴 | Aruba"
        }, {
            "code": "AU",
            "name": "科科斯（基林）群岛 | Australia"
        }, {
            "code": "AT",
            "name": "奥地利 | Austria"
        }, {
            "code": "AZ",
            "name": "阿塞拜疆 | Azerbaijan"
        }, {
            "code": "BS",
            "name": "巴哈马 | Bahamas"
        }, {
            "code": "BH",
            "name": "巴林 | Bahrain"
        }, {
            "code": "BD",
            "name": "孟加拉国 | Bangladesh"
        }, {
            "code": "BB",
            "name": "巴巴多斯 | Barbados"
        }, {
            "code": "BY",
            "name": "白俄罗斯 | Belarus"
        }, {
            "code": "BE",
            "name": "比利时 | Belgium"
        }, {
            "code": "BZ",
            "name": "伯利兹 | Belize"
        }, {
            "code": "BJ",
            "name": "贝宁 | Benin"
        }, {
            "code": "BM",
            "name": "百慕大 | Bermuda"
        }, {
            "code": "BT",
            "name": "不丹 | Bhutan"
        }, {
            "code": "BO",
            "name": "玻利维亚 | Bolivia"
        }, {
            "code": "BA",
            "name": "波斯尼亚和黑塞哥维那 | Bosnia and Herzegovina"
        }, {
            "code": "BW",
            "name": "博茨瓦纳 | Botswana"
        }, {
            "code": "BV",
            "name": "Bouvet Island"
        }, {
            "code": "BR",
            "name": "巴西 | Brazil"
        }, {
            "code": "IO",
            "name": "英属印度洋领地 | British Indian Ocean Territory"
        }, {
            "code": "BN",
            "name": "文莱 | Brunei Darussalam"
        }, {
            "code": "BG",
            "name": "保加利亚 | Bulgaria"
        }, {
            "code": "BF",
            "name": "布基纳法索 | Burkina Faso"
        }, {
            "code": "BI",
            "name": "布隆迪 | Burundi"
        }, {
            "code": "KH",
            "name": "柬埔寨 | Cambodia"
        }, {
            "code": "CM",
            "name": "喀麦隆 | Cameroon"
        }, {
            "code": "CA",
            "name": "卡塔尔 | Canada"
        }, {
            "code": "CV",
            "name": "佛得角 | Cape Verde"
        }, {
            "code": "KY",
            "name": "开曼群岛 | Cayman Islands"
        }, {
            "code": "CF",
            "name": "中非共和国 | Central African Republic"
        }, {
            "code": "TD",
            "name": "乍得 | Chad"
        }, {
            "code": "CL",
            "name": "智利 | Chile"
        }, {
            "code": "CN",
            "name": "中国 | China"
        }, {
            "code": "CX",
            "name": "科科斯（基林）群岛 | 科科斯（基林）群岛 | Christmas Island"
        }, {
            "code": "CC",
            "name": "Cocos (Keeling) Islands"
        }, {
            "code": "CO",
            "name": "哥伦比亚 | Colombia"
        }, {
            "code": "KM",
            "name": "科摩罗 | Comoros"
        }, {
            "code": "CG",
            "name": "刚果 - 布拉柴维尔 | Congo"
        }, {
            "code": "CD",
            "name": "刚果民主共和国 | Congo, The Democratic Republic of the"
        }, {
            "code": "CK",
            "name": "库克群岛 | Cook Islands"
        }, {
            "code": "CR",
            "name": "哥斯达黎加 | Costa Rica"
        }, {
            "code": "CI",
            "name": "象牙海岸 | Cote D\"Ivoire"
        }, {
            "code": "HR",
            "name": "克罗地亚 | Croatia"
        }, {
            "code": "CU",
            "name": "古巴 | Cuba"
        }, {
            "code": "CY",
            "name": "塞浦路斯 | Cyprus"
        }, {
            "code": "CZ",
            "name": "捷克共和国 | Czech Republic"
        }, {
            "code": "DK",
            "name": "丹麦 | Denmark"
        }, {
            "code": "DJ",
            "name": "吉布提 | Djibouti"
        }, {
            "code": "DM",
            "name": "多米尼加 | Dominica"
        }, {
            "code": "DO",
            "name": "卡塔尔 | Dominican Republic"
        }, {
            "code": "EC",
            "name": "厄瓜多尔 | Ecuador"
        }, {
            "code": "EG",
            "name": "埃及 | Egypt"
        }, {
            "code": "SV",
            "name": "萨尔瓦多 | El Salvador"
        }, {
            "code": "GQ",
            "name": "赤道几内亚 | Equatorial Guinea"
        }, {
            "code": "ER",
            "name": "厄立特里亚 | Eritrea"
        }, {
            "code": "EE",
            "name": "爱沙尼亚 | Estonia"
        }, {
            "code": "ET",
            "name": "埃塞俄比亚 | Ethiopia"
        }, {
            "code": "FK",
            "name": "福克兰群岛 | Falkland Islands (Malvinas)"
        }, {
            "code": "FO",
            "name": "法罗群岛 | Faroe Islands"
        }, {
            "code": "FJ",
            "name": "斐济 | Fiji"
        }, {
            "code": "FI",
            "name": "奥兰群岛 | Finland"
        }, {
            "code": "FR",
            "name": "法国 | France"
        }, {
            "code": "GF",
            "name": "法属圭亚那 | French Guiana"
        }, {
            "code": "PF",
            "name": "法属波利尼西亚 | French Polynesia"
        }, {
            "code": "TF",
            "name": "French Southern Territories"
        }, {
            "code": "GA",
            "name": "加蓬 | Gabon"
        }, {
            "code": "GM",
            "name": "冈比亚 | Gambia"
        }, {
            "code": "GE",
            "name": "格鲁吉亚 | Georgia"
        }, {
            "code": "DE",
            "name": "德国 | Germany"
        }, {
            "code": "GH",
            "name": "加纳 | Ghana"
        }, {
            "code": "GI",
            "name": "直布罗陀 | Gibraltar"
        }, {
            "code": "GR",
            "name": "希腊 | Greece"
        }, {
            "code": "GL",
            "name": "格陵兰岛 | Greenland"
        }, {
            "code": "GD",
            "name": "格林纳达 | Grenada"
        }, {
            "code": "GP",
            "name": "圣马丁 | Guadeloupe"
        }, {
            "code": "GU",
            "name": "关岛 | Guam"
        }, {
            "code": "GT",
            "name": "危地马拉 | Guatemala"
        }, {
            "code": "GG",
            "name": "英国 | Guernsey"
        }, {
            "code": "GN",
            "name": "几内亚 | Guinea"
        }, {
            "code": "GW",
            "name": "几内亚比绍 | Guinea-Bissau"
        }, {
            "code": "GY",
            "name": "圭亚那 | Guyana"
        }, {
            "code": "HT",
            "name": "海地 | Haiti"
        }, {
            "code": "HM",
            "name": "Heard Island and Mcdonald Islands"
        }, {
            "code": "VA",
            "name": "梵蒂冈 | Holy See (Vatican City State)"
        }, {
            "code": "HN",
            "name": "洪都拉斯 | Honduras"
        }, {
            "code": "HK",
            "name": "香港 | Hong Kong"
        }, {
            "code": "HU",
            "name": "匈牙利 | Hungary"
        }, {
            "code": "IS",
            "name": "冰岛 | Iceland"
        }, {
            "code": "IN",
            "name": "印度 | India"
        }, {
            "code": "ID",
            "name": "印度尼西亚 | Indonesia"
        }, {
            "code": "IR",
            "name": "伊朗 | Iran, Islamic Republic Of"
        }, {
            "code": "IQ",
            "name": "伊拉克 | Iraq"
        }, {
            "code": "IE",
            "name": "爱尔兰 | Ireland"
        }, {
            "code": "IM",
            "name": "英国 | Isle of Man"
        }, {
            "code": "IL",
            "name": "以色列 | Israel"
        }, {
            "code": "IT",
            "name": "梵蒂冈 | Italy"
        }, {
            "code": "JM",
            "name": "牙买加 | Jamaica"
        }, {
            "code": "JP",
            "name": "日本 | Japan"
        }, {
            "code": "JE",
            "name": "英国 | Jersey"
        }, {
            "code": "JO",
            "name": "约旦 | Jordan"
        }, {
            "code": "KZ",
            "name": "俄罗斯 | Kazakhstan"
        }, {
            "code": "KE",
            "name": "肯尼亚 | Kenya"
        }, {
            "code": "KI",
            "name": "基里巴斯 | Kiribati"
        }, {
            "code": "KP",
            "name": "朝鲜 | Korea, Democratic People\"S Republic of"
        }, {
            "code": "KR",
            "name": "韩国 | Korea, Republic of"
        }, {
            "code": "KW",
            "name": "科威特 | Kuwait"
        }, {
            "code": "KG",
            "name": "吉尔吉斯斯坦 | Kyrgyzstan"
        }, {
            "code": "LA",
            "name": "老挝 | Lao People\"S Democratic Republic"
        }, {
            "code": "LV",
            "name": "拉脱维亚 | Latvia"
        }, {
            "code": "LB",
            "name": "黎巴嫩 | Lebanon"
        }, {
            "code": "LS",
            "name": "莱索托 | Lesotho"
        }, {
            "code": "LR",
            "name": "利比里亚 | Liberia"
        }, {
            "code": "LY",
            "name": "利比亚 | Libyan Arab Jamahiriya"
        }, {
            "code": "LI",
            "name": "列支敦士登 | Liechtenstein"
        }, {
            "code": "LT",
            "name": "立陶宛 | Lithuania"
        }, {
            "code": "LU",
            "name": "卢森堡 | Luxembourg"
        }, {
            "code": "MO",
            "name": "澳门 | Macao"
        }, {
            "code": "MK",
            "name": "马其顿 | Macedonia, The Former Yugoslav Republic of"
        }, {
            "code": "MG",
            "name": "马达加斯加 | Madagascar"
        }, {
            "code": "MW",
            "name": "马拉维 | Malawi"
        }, {
            "code": "MY",
            "name": "马来西亚 | Malaysia"
        }, {
            "code": "MV",
            "name": "马尔代夫 | Maldives"
        }, {
            "code": "ML",
            "name": "马里 | Mali"
        }, {
            "code": "MT",
            "name": "马耳他 | Malta"
        }, {
            "code": "MH",
            "name": "马绍尔群岛 | Marshall Islands"
        }, {
            "code": "MQ",
            "name": "马提尼克 | Martinique"
        }, {
            "code": "MR",
            "name": "毛里塔尼亚 | Mauritania"
        }, {
            "code": "MU",
            "name": "毛里求斯 | Mauritius"
        }, {
            "code": "YT",
            "name": "留尼汪岛 | Mayotte"
        }, {
            "code": "MX",
            "name": "墨西哥 | Mexico"
        }, {
            "code": "FM",
            "name": "密克罗尼西亚 | Micronesia, Federated States of"
        }, {
            "code": "MD",
            "name": "摩尔多瓦 | Moldova, Republic of"
        }, {
            "code": "MC",
            "name": "摩纳哥 | Monaco"
        }, {
            "code": "MN",
            "name": "蒙古 | Mongolia"
        }, {
            "code": "MS",
            "name": "蒙特塞拉特 | Montserrat"
        }, {
            "code": "MA",
            "name": "撒哈拉沙漠西部 | Morocco"
        }, {
            "code": "MZ",
            "name": "莫桑比克 | Mozambique"
        }, {
            "code": "MM",
            "name": "缅甸 | Myanmar"
        }, {
            "code": "NA",
            "name": "纳米比亚 | Namibia"
        }, {
            "code": "NR",
            "name": "瑙鲁 | Nauru"
        }, {
            "code": "NP",
            "name": "尼泊尔 | Nepal"
        }, {
            "code": "NL",
            "name": "荷兰 | Netherlands"
        }, {
            "code": "AN",
            "name": "Netherlands Antilles"
        }, {
            "code": "NC",
            "name": "新喀里多尼亚 | New Caledonia"
        }, {
            "code": "NZ",
            "name": "新西兰 | New Zealand"
        }, {
            "code": "NI",
            "name": "尼加拉瓜 | Nicaragua"
        }, {
            "code": "NE",
            "name": "尼日尔 | Niger"
        }, {
            "code": "NG",
            "name": "尼日利亚 | Nigeria"
        }, {
            "code": "NU",
            "name": "纽埃 | Niue"
        }, {
            "code": "NF",
            "name": "诺福克岛 | Norfolk Island"
        }, {
            "code": "MP",
            "name": "北马里亚纳群岛 | Northern Mariana Islands"
        }, {
            "code": "NO",
            "name": "斯瓦尔巴和扬马延 | Norway"
        }, {
            "code": "OM",
            "name": "阿曼 | Oman"
        }, {
            "code": "PK",
            "name": "巴基斯坦 | Pakistan"
        }, {
            "code": "PW",
            "name": "帕劳 | Palau"
        }, {
            "code": "PS",
            "name": "巴勒斯坦 | Palestinian Territory, Occupied"
        }, {
            "code": "PA",
            "name": "巴拿马 | Panama"
        }, {
            "code": "PG",
            "name": "巴布亚新几内亚 | Papua New Guinea"
        }, {
            "code": "PY",
            "name": "巴拉圭 | Paraguay"
        }, {
            "code": "PE",
            "name": "秘鲁 | Peru"
        }, {
            "code": "PH",
            "name": "菲律宾 | Philippines"
        }, {
            "code": "PN",
            "name": "Pitcairn"
        }, {
            "code": "PL",
            "name": "波兰 | Poland"
        }, {
            "code": "PT",
            "name": "葡萄牙 | Portugal"
        }, {
            "code": "PR",
            "name": "卡塔尔 | Puerto Rico"
        }, {
            "code": "QA",
            "name": " | Qatar"
        }, {
            "code": "RE",
            "name": "留尼汪岛 | Reunion"
        }, {
            "code": "RO",
            "name": "罗马尼亚 | Romania"
        }, {
            "code": "RU",
            "name": "俄罗斯 | Russian Federation"
        }, {
            "code": "RW",
            "name": "卢旺达 | RWANDA"
        }, {
            "code": "SH",
            "name": "圣赫勒拿岛 | Saint Helena"
        }, {
            "code": "KN",
            "name": "圣基茨和尼维斯 | Saint Kitts and Nevis"
        }, {
            "code": "LC",
            "name": "圣卢西亚 | Saint Lucia"
        }, {
            "code": "PM",
            "name": "圣皮埃尔和密克隆 | Saint Pierre and Miquelon"
        }, {
            "code": "VC",
            "name": "圣文森特和格林纳丁斯 | Saint Vincent and the Grenadines"
        }, {
            "code": "WS",
            "name": "萨摩亚 | Samoa"
        }, {
            "code": "SM",
            "name": "圣马力诺 | San Marino"
        }, {
            "code": "ST",
            "name": "圣多美和普林西比 | Sao Tome and Principe"
        }, {
            "code": "SA",
            "name": "沙特阿拉伯‎) | Saudi Arabia"
        }, {
            "code": "SN",
            "name": "塞内加尔 | Senegal"
        }, {
            "code": "RS",
            "name": "塞尔维亚 | Serbia"
        }, {
            "code": "ME",
            "name": "黑山 | Montenegro"
        }, {
            "code": "SC",
            "name": "塞舌尔 | Seychelles"
        }, {
            "code": "SL",
            "name": "塞拉利昂 | Sierra Leone"
        }, {
            "code": "SG",
            "name": "新加坡 | Singapore"
        }, {
            "code": "SK",
            "name": "斯洛伐克 | Slovakia"
        }, {
            "code": "SI",
            "name": "斯洛文尼亚 | Slovenia"
        }, {
            "code": "SB",
            "name": "所罗门群岛 | Solomon Islands"
        }, {
            "code": "SO",
            "name": "索马里 | Somalia"
        }, {
            "code": "ZA",
            "name": "南非 | South Africa"
        }, {
            "code": "GS",
            "name": "South Georgia and the South Sandwich Islands"
        }, {
            "code": "ES",
            "name": "西班牙 | Spain"
        }, {
            "code": "LK",
            "name": "斯里兰卡 | Sri Lanka"
        }, {
            "code": "SD",
            "name": "苏丹 | Sudan"
        }, {
            "code": "SR",
            "name": "苏里南 | Suriname"
        }, {
            "code": "SJ",
            "name": "斯瓦尔巴和扬马延 | Svalbard and Jan Mayen"
        }, {
            "code": "SZ",
            "name": "斯威士兰 | Swaziland"
        }, {
            "code": "SE",
            "name": "瑞典 | Sweden"
        }, {
            "code": "CH",
            "name": "瑞士 | Switzerland"
        }, {
            "code": "SY",
            "name": "叙利亚‎ | Syrian Arab Republic"
        }, {
            "code": "TJ",
            "name": "塔吉克斯坦 | Tajikistan"
        }, {
            "code": "TZ",
            "name": "坦桑尼亚 | Tanzania, United Republic of"
        }, {
            "code": "TH",
            "name": "泰国 | Thailand"
        }, {
            "code": "TL",
            "name": "东帝汶 | Timor-Leste"
        }, {
            "code": "TG",
            "name": "多哥 | Togo"
        }, {
            "code": "TK",
            "name": "托克劳 | Tokelau"
        }, {
            "code": "TO",
            "name": "汤加 | Tonga"
        }, {
            "code": "TT",
            "name": "特立尼达和多巴哥 | Trinidad and Tobago"
        }, {
            "code": "TN",
            "name": "突尼斯‎ | Tunisia"
        }, {
            "code": "TR",
            "name": "土耳其 | Turkey"
        }, {
            "code": "TM",
            "name": "土库曼斯坦 | Turkmenistan"
        }, {
            "code": "TC",
            "name": "特克斯和凯科斯群岛 | Turks and Caicos Islands"
        }, {
            "code": "TV",
            "name": "图瓦卢 | Tuvalu"
        }, {
            "code": "UG",
            "name": "乌干达 | Uganda"
        }, {
            "code": "UA",
            "name": "乌克兰 | Ukraine"
        }, {
            "code": "AE",
            "name": "阿拉伯联合酋长国‎ | United Arab Emirates"
        }, {
            "code": "GB",
            "name": "英国 | United Kingdom"
        }, {
            "code": "US",
            "name": "卡塔尔 | United States"
        }, {
            "code": "UM",
            "name": "United States Minor Outlying Islands"
        }, {
            "code": "UY",
            "name": "乌拉圭 | Uruguay"
        }, {
            "code": "UZ",
            "name": "乌兹别克斯坦 | Uzbekistan"
        }, {
            "code": "VU",
            "name": "瓦努阿图 | Vanuatu"
        }, {
            "code": "VE",
            "name": "委内瑞拉 | Venezuela"
        }, {
            "code": "VN",
            "name": "越南 | Viet Nam"
        }, {
            "code": "VG",
            "name": "B英属维尔京群岛 | Virgin Islands, British"
        }, {
            "code": "VI",
            "name": "美属维尔京群岛 | Virgin Islands, U.S."
        }, {
            "code": "WF",
            "name": "瓦利斯和富图纳群岛 | Wallis and Futuna"
        }, {
            "code": "EH",
            "name": "撒哈拉沙漠西部 | Western Sahara"
        }, {
            "code": "YE",
            "name": "也门 | Yemen"
        }, {
            "code": "ZM",
            "name": "赞比亚 | Zambia"
        }, {
            "code": "ZW",
            "name": "津巴布韦 | Zimbabwe"
        }]

    var countryInput = $(document).find('.countrypicker');
    var countryList = "";


    //set defaults
    for (i = 0; i < countryInput.length; i++) {

        //check if flag
        flag = countryInput.eq(i).data('flag');

        if (flag) {
            countryList = "";

            //for each build list with flag
            $.each(countries, function (index, country) {
                var flagIcon = "css/flags/" + country.code + ".png";
                countryList += "<option data-country-code='" + country.code + "' data-tokens='" + country.code + " " + country.name + "' style='padding-left:25px; background-position: 4px 7px; background-image:url(" + flagIcon + ");background-repeat:no-repeat;' value='" + country.name + "'>" + country.name + "</option>";
            });


            //change flag on select change
            countryInput.eq(i).on('change', function () {
                button = $(this).closest('.btn-group').children('.btn');
                def = $(this).find(':selected').data('country-code');
                flagIcon = "css/flags/" + def + ".png";
                button.css("background-size", '20px');
                button.css("background-position", '10px 9px');
                button.css("padding-left", '40px');
                button.css("background-repeat", 'no-repeat');
                button.css("background-image", "url('" + flagIcon + "'");

            });
        } else {
            countryList = "";

            //for each build list without flag
            $.each(countries, function (index, country) {
                countryList += "<option data-country-code='" + country.code + "' data-tokens='" + country.code + " " + country.name + "' value='" + country.name + "'>" + country.name + "</option>";
            });


        }

        //append country list
        countryInput.eq(i).html(countryList);


        //check if default
        def = countryInput.eq(i).data('default');
        //if there's a default, set it
        if (def) {
            $.each(countries, function (index, country) {
                if (def === country.code) {
                    countryInput.eq(i).val(country.name);
                }
            });

        }


    }


});
