(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true;
		playlist1 = [
{
title: '光辉岁月(粤语)',
artist: 'Beyond',
album: '平猫的歌曲',
cover: 'img/120.jpg',
mp3: 'Songs/00120.mp3',
ogg: ''
},
{
title: '冷雨夜(粤语)',
artist: 'Beyond',
album: '平猫的歌曲',
cover:'img/7.jpg',
mp3: 'Songs/00007.mp3',
ogg: ''
},
{
title: '喜欢你(粤语)',
artist: 'Beyond',
album: '平猫的歌曲',
cover: 'img/57.jpg',
mp3: 'Songs/00057.mp3',
ogg: ''
},
{
title: '老椰子树下',
artist: '陈彼得',
album: '平猫的歌曲',
cover:'img/1.jpg',
mp3: 'Songs/00001.mp3',
ogg: ''
},
{
title: '游子吟',
artist: '成方圆',
album: '平猫的歌曲',
cover: 'img/148.jpg',
mp3: 'Songs/00148.mp3',
ogg: ''
},
{
title: '把悲伤留给自己(清唱)',
artist: '陈升',
album: '平猫的歌曲',
cover: 'img/95.jpg',
mp3: 'Songs/00095.mp3',
ogg: ''
},
{
title: '北京一夜',
artist: '陈升',
album: '平猫的歌曲',
cover: 'img/141.jpg',
mp3: 'Songs/00141.mp3',
ogg: ''
},
{
title: '流浪歌',
artist: '陈星',
album: '平猫的歌曲',
cover: 'img/99.jpg',
mp3: 'Songs/00099.mp3',
ogg: ''
},
{
title: '好久不见',
artist: '陈奕迅',
album: '平猫的歌曲',
cover: 'img/168.jpg',
mp3: 'Songs/00168.mp3',
ogg: ''
},
{
title: '同一首歌',
artist: '蔡国庆',
album: '平猫的歌曲',
cover: 'img/136.jpg',
mp3: 'Songs/00136.mp3',
ogg: ''
},
{
title: '我和我的祖国',
artist: '蔡国庆',
album: '平猫的歌曲',
cover: 'img/135.jpg',
mp3: 'Songs/00135.mp3',
ogg: ''
},
{
title: 'Take me home, Country roads',
artist: 'John Denver',
album: '平猫的歌曲',
cover: 'img/53.jpg',
mp3: 'Songs/00053.mp3',
ogg: ''
},
{
title: '有多少爱可以重来',
artist: '迪克牛仔',
album: '平猫的歌曲',
cover: 'img/79.jpg',
mp3: 'Songs/00079.mp3',
ogg: ''
},
{
title: '外套',
artist: '动力火车',
album: '平猫的歌曲',
cover: 'img/118.jpg',
mp3: 'Songs/00118.mp3',
ogg: ''
},
{
title: 'Blowing in the wind',
artist: 'Bob Dylan',
album: '平猫的歌曲',
cover: 'img/127.jpg',
mp3: 'Songs/00127.mp3',
ogg: ''
},
{
title: '那天晚上',
artist: '高凌风',
album: '平猫的歌曲',
cover: 'img/61.jpg',
mp3: 'Songs/00061.mp3',
ogg: ''
},
{
title: '风姿花伝(日语)',
artist: '谷村新司',
album: '平猫的歌曲',
cover: 'img/109.jpg',
mp3: 'Songs/00109.mp3',
ogg: ''
},
{
title: '星(日语)',
artist: '谷村新司',
album: '平猫的歌曲',
cover: 'img/108.jpg',
mp3: 'Songs/00108.mp3',
ogg: ''
},
{
title: '回家',
artist: '关吉吉',
album: '平猫的歌曲',
cover:'img/31.jpg',
mp3: 'Songs/00031.mp3',
ogg: ''
},
{
title: '第一次',
artist: '光良',
album: '平猫的歌曲',
cover:'img/22.jpg',
mp3: 'Songs/00022.mp3',
ogg: ''
},
{
title: '雪人',
artist: '范晓萱',
album: '平猫的歌曲',
cover: 'img/128.jpg',
mp3: 'Songs/00128.mp3',
ogg: ''
},
{
title: '安娜',
artist: '费翔',
album: '平猫的歌曲',
cover: 'img/130.jpg',
mp3: 'Songs/00130.mp3',
ogg: ''
},
{
title: '冬天里的一把火',
artist: '费翔',
album: '平猫的歌曲',
cover: 'img/15.jpg',
mp3: 'Songs/00015.mp3',
ogg: ''
},
{
title: '读你',
artist: '费翔',
album: '平猫的歌曲',
cover: 'img/111.jpg',
mp3: 'Songs/00111.mp3',
ogg: ''
},
{
title: '故乡的云',
artist: '费翔',
album: '平猫的歌曲',
cover: 'img/66.jpg',
mp3: 'Songs/00066.mp3',
ogg: ''
},
{
title: '溜溜的她',
artist: '费翔',
album: '平猫的歌曲',
cover: 'img/36.jpg',
mp3: 'Songs/00036.mp3',
ogg: ''
},
{
title: '牵引',
artist: '费翔',
album: '平猫的歌曲',
cover: 'img/52.jpg',
mp3: 'Songs/00052.mp3',
ogg: ''
},
{
title: '我怎么哭了',
artist: '费翔',
album: '平猫的歌曲',
cover: 'img/18.jpg',
mp3: 'Songs/00018.mp3',
ogg: ''
},
{
title: '午夜星河',
artist: '费翔',
album: '平猫的歌曲',
cover:'img/25.jpg',
mp3: 'Songs/00025.mp3',
ogg: ''
},
{
title: '只有分离',
artist: '费翔',
album: '平猫的歌曲',
cover: 'img/3.jpg',
mp3: 'Songs/00003.mp3',
ogg: ''
},
{
title: '橄榄树',
artist: '费玉清',
album: '平猫的歌曲',
cover:'img/40.jpg',
mp3: 'Songs/00040.mp3',
ogg: ''
},
{
title: '小幸运',
artist: '费玉清',
album: '平猫的歌曲',
cover: 'img/8.jpg',
mp3: 'Songs/00008.mp3',
ogg: ''
},
{
title: '长江之歌',
artist: '韩磊',
album: '平猫的歌曲',
cover: 'img/140.jpg',
mp3: 'Songs/00140.mp3',
ogg: ''
},
{
title: '新鸳鸯蝴蝶梦',
artist: '黄安',
album: '平猫的歌曲',
cover: 'img/154.jpg',
mp3: 'Songs/00154.mp3',
ogg: ''
},
{
title: '浏阳河',
artist: '蒋大为',
album: '平猫的歌曲',
cover: 'img/139.jpg',
mp3: 'Songs/00139.mp3',
ogg: ''
},
{
title: '补锅（花鼓戏）',
artist: '李谷一/钟宜淳',
album: '平猫的歌曲',
cover: 'img/73.jpg',
mp3: 'Songs/00073.mp3',
ogg: ''
},
{
title: '贝加尔湖畔',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/2.jpg',
mp3: 'Songs/00002.mp3',
ogg: ''
},
{
title: '车站',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/146.jpg',
mp3: 'Songs/00146.mp3',
ogg: ''
},
{
title: '等待黎明',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/91.jpg',
mp3: 'Songs/00091.mp3',
ogg: ''
},
{
title: '故乡山川',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/51.jpg',
mp3: 'Songs/00051.mp3',
ogg: ''
},
{
title: '父亲',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/71.jpg',
mp3: 'Songs/00071.mp3',
ogg: ''
},
{
title: '抚仙湖',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/157.jpg',
mp3: 'Songs/00157.mp3',
ogg: ''
},
{
title: '今天是你的生日，妈妈',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/38.jpg',
mp3: 'Songs/00038.mp3',
ogg: ''
},
{
title: '梦一场',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/68.jpg',
mp3: 'Songs/00068.mp3',
ogg: ''
},
{
title: '似水流年',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/94.jpg',
mp3: 'Songs/00094.mp3',
ogg: ''
},
{
title: '向往',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/75.jpg',
mp3: 'Songs/00075.mp3',
ogg: ''
},
{
title: '一辈子的十分钟',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/69.jpg',
mp3: 'Songs/00069.mp3',
ogg: ''
},
{
title: '异乡人',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/145.jpg',
mp3: 'Songs/00145.mp3',
ogg: ''
},
{
title: '月光',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/6.jpg',
mp3: 'Songs/00006.mp3',
ogg: ''
},
{
title: '雨后初睛',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/143.jpg',
mp3: 'Songs/00143.mp3',
ogg: ''
},
{
title: '绽放',
artist: '李健',
album: '平猫的歌曲',
cover: 'img/93.jpg',
mp3: 'Songs/00093.mp3',
ogg: ''
},
{
title: '护花使者(粤语)',
artist: '李克勤',
album: '平猫的歌曲',
cover: 'img/164.jpg',
mp3: 'Songs/00164.mp3',
ogg: ''
},
{
title: '一生不变(粤语)',
artist: '李克勤',
album: '平猫的歌曲',
cover: 'img/30.jpg',
mp3: 'Songs/00030.mp3',
ogg: ''
},
{
title: '迟来的爱',
artist: '李茂山',
album: '平猫的歌曲',
cover: 'img/80.jpg',
mp3: 'Songs/00080.mp3',
ogg: ''
},
{
title: '窗外',
artist: '李琛',
album: '平猫的歌曲',
cover: 'img/78.jpg',
mp3: 'Songs/00078.mp3',
ogg: ''
},
{
title: '剑伤',
artist: '李易峰',
album: '平猫的歌曲',
cover: 'img/119.jpg',
mp3: 'Songs/00119.mp3',
ogg: ''
},
{
title: '爱的代价',
artist: '李宗盛',
album: '平猫的歌曲',
cover: 'img/166.jpg',
mp3: 'Songs/00166.mp3',
ogg: ''
},
{
title: '漂洋过海来看你',
artist: '李宗盛',
album: '平猫的歌曲',
cover: 'img/39.jpg',
mp3: 'Songs/00039.mp3',
ogg: ''
},
{
title: '山丘',
artist: '李宗盛',
album: '平猫的歌曲',
cover: 'img/62.jpg',
mp3: 'Songs/00062.mp3',
ogg: ''
},
{
title: '透过开满鲜花的月亮',
artist: '林依轮',
album: '平猫的歌曲',
cover: 'img/159.jpg',
mp3: 'Songs/00159.mp3',
ogg: ''
},
{
title: '开到荼蘼',
artist: '林宥嘉',
album: '平猫的歌曲',
cover: 'img/121.jpg',
mp3: 'Songs/00121.mp3',
ogg: ''
},
{
title: '半壶纱',
artist: '刘珂矣',
album: '平猫的歌曲',
cover: 'img/114.jpg',
mp3: 'Songs/00114.mp3',
ogg: ''
},
{
title: '飞行船',
artist: '刘文正',
album: '平猫的歌曲',
cover: 'img/17.jpg',
mp3: 'Songs/00017.mp3',
ogg: ''
},
{
title: '三月里的小雨',
artist: '刘文正',
album: '平猫的歌曲',
cover:'img/13.jpg',
mp3: 'Songs/00013.mp3',
ogg: ''
},
{
title: '三套车',
artist: '刘子豪',
album: '平猫的歌曲',
cover: 'img/169.jpg',
mp3: 'Songs/00169.mp3',
ogg: ''
},
{
title: '童年',
artist: '罗大佑',
album: '平猫的歌曲',
cover: 'img/150.jpg',
mp3: 'Songs/00150.mp3',
ogg: ''
},
{
title: '昨夜星辰',
artist: '罗时丰',
album: '平猫的歌曲',
cover: 'img/9.jpg',
mp3: 'Songs/00009.mp3',
ogg: ''
},
{
title: '掌声响起',
artist: '罗时丰',
album: '平猫的歌曲',
cover: 'img/142.jpg',
mp3: 'Songs/00142.mp3',
ogg: ''
},
{
title: '顺流逆流(粤语)',
artist: '罗文',
album: '平猫的歌曲',
cover: 'img/21.jpg',
mp3: 'Songs/00021.mp3',
ogg: ''
},
{
title: '望乡',
artist: '满文军',
album: '平猫的歌曲',
cover: 'img/160.jpg',
mp3: 'Songs/00160.mp3',
ogg: ''
},
{
title: '晚秋',
artist: '毛宁',
album: '平猫的歌曲',
cover: 'img/58.jpg',
mp3: 'Songs/00058.mp3',
ogg: ''
},
{
title: 'Daylight',
artist: 'Maroon 5',
album: '平猫的歌曲',
cover: 'img/134.jpg',
mp3: 'Songs/00134.mp3',
ogg: ''
},
{
title: 'Leaving California',
artist: 'Maroon 5',
album: '平猫的歌曲',
cover: 'img/107.jpg',
mp3: 'Songs/00107.mp3',
ogg: ''
},
{
title: 'Lost stars',
artist: 'Maroon 5',
album: '平猫的歌曲',
cover: 'img/137.jpg',
mp3: 'Songs/00137.mp3',
ogg: ''
},
{
title: 'She Will be loved',
artist: 'Maroon 5',
album: '平猫的歌曲',
cover:'img/10.jpg',
mp3: 'Songs/00010.mp3',
ogg: ''
},
{
title: 'Sugar',
artist: 'Maroon 5',
album: '平猫的歌曲',
cover: 'img/138.jpg',
mp3: 'Songs/00138.mp3',
ogg: ''
},
{
title: 'The way you look tonight',
artist: 'Maroon 5',
album: '平猫的歌曲',
cover: 'img/132.jpg',
mp3: 'Songs/00132.mp3',
ogg: ''
},
{
title: 'Vincent',
artist: 'Don McLean',
album: '平猫的歌曲',
cover: 'img/102.jpg',
mp3: 'Songs/00102.mp3',
ogg: ''
},
{
title: '纷纷飘坠的音符',
artist: '潘安邦',
album: '平猫的歌曲',
cover: 'img/23.jpg',
mp3: 'Songs/00023.mp3',
ogg: ''
},
{
title: '外婆的澎湖湾',
artist: '潘安邦',
album: '平猫的歌曲',
cover: 'img/155.jpg',
mp3: 'Songs/00155.mp3',
ogg: ''
},
{
title: '白桦树',
artist: '朴树',
album: '平猫的歌曲',
cover:'img/162.jpg',
mp3: 'Songs/00162.mp3',
ogg: ''
},
{
title: '平凡之路',
artist: '朴树',
album: '平猫的歌曲',
cover:'img/34.jpg',
mp3: 'Songs/00034.mp3',
ogg: ''
},
{
title: '子曰(说唱)',
artist: '卜学亮',
album: '平猫的歌曲',
cover: 'img/29.jpg',
mp3: 'Songs/00029.mp3',
ogg: ''
},
{
title: '大约在冬季',
artist: '齐秦',
album: '平猫的歌曲',
cover: 'img/72.jpg',
mp3: 'Songs/00072.mp3',
ogg: ''
},
{
title: '外面的世界',
artist: '齐秦',
album: '平猫的歌曲',
cover: 'img/104.jpg',
mp3: 'Songs/00104.mp3',
ogg: ''
},
{
title: '张三的歌',
artist: '齐秦',
album: '平猫的歌曲',
cover: 'img/147.jpg',
mp3: 'Songs/00147.mp3',
ogg: ''
},
{
title: '北国之春(日语)',
artist: '千昌夫',
album: '平猫的歌曲',
cover: 'img/110.jpg',
mp3: 'Songs/00110.mp3',
ogg: ''
},
{
title: 'I Believe(韩语)',
artist: '申升勋',
album: '平猫的歌曲',
cover: 'img/106.jpg',
mp3: 'Songs/00106.mp3',
ogg: ''
},
{
title: 'The sounds of silence',
artist: 'Simon & Garfunke',
album: '平猫的歌曲',
cover: 'img/70.jpg',
mp3: 'Songs/00070.mp3',
ogg: ''
},
{
title: '斑马斑马',
artist: '宋冬野',
album: '平猫的歌曲',
cover: 'img/98.jpg',
mp3: 'Songs/00098.mp3',
ogg: ''
},
{
title: '小情歌',
artist: '苏打绿',
album: '平猫的歌曲',
cover: 'img/24.jpg',
mp3: 'Songs/00024.mp3',
ogg: ''
},
{
title: '中华民谣',
artist: '孙浩',
album: '平猫的歌曲',
cover: 'img/90.jpg',
mp3: 'Songs/00090.mp3',
ogg: ''
},
{
title: '雾锁南洋',
artist: '孙振福',
album: '平猫的歌曲',
cover: 'img/149.jpg',
mp3: 'Songs/00149.mp3',
ogg: ''
},
{
title: '千言万语',
artist: '邰正宵',
album: '平猫的歌曲',
cover: 'img/161.jpg',
mp3: 'Songs/00161.mp3',
ogg: ''
},
{
title: '千纸鹤',
artist: '邰正宵',
album: '平猫的歌曲',
cover: 'img/156.jpg',
mp3: 'Songs/00156.mp3',
ogg: ''
},
{
title: '一千零一夜',
artist: '邰正宵',
album: '平猫的歌曲',
cover: 'img/153.jpg',
mp3: 'Songs/00153.mp3',
ogg: ''
},
{
title: '纸飞机',
artist: '邰正宵',
album: '平猫的歌曲',
cover: 'img/97.jpg',
mp3: 'Songs/00097.mp3',
ogg: ''
},
{
title: '爱在深秋(粤语)',
artist: '谭咏麟',
album: '平猫的歌曲',
cover: 'img/56.jpg',
mp3: 'Songs/00056.mp3',
ogg: ''
},
{
title: '痴心当玩偶(粤语)',
artist: '谭咏麟',
album: '平猫的歌曲',
cover: 'img/50.jpg',
mp3: 'Songs/00050.mp3',
ogg: ''
},
{
title: '朋友(粤语)',
artist: '谭咏麟',
album: '平猫的歌曲',
cover: 'img/131.jpg',
mp3: 'Songs/00131.mp3',
ogg: ''
},
{
title: '水中花',
artist: '谭咏麟',
album: '平猫的歌曲',
cover: 'img/55.jpg',
mp3: 'Songs/00055.mp3',
ogg: ''
},
{
title: '一万次悲伤',
artist: '逃跑计划',
album: '平猫的歌曲',
cover: 'img/47.jpg',
mp3: 'Songs/00047.mp3',
ogg: ''
},
{
title: '直到世界终结(日语)',
artist: 'WANDS',
album: '平猫的歌曲',
cover: 'img/105.jpg',
mp3: 'Songs/00105.mp3',
ogg: ''
},
{
title: '红豆',
artist: '文章',
album: '平猫的歌曲',
cover:'img/16.jpg',
mp3: 'Songs/00016.mp3',
ogg: ''
},
{
title: '世界第一等(闽南话)',
artist: '伍陌',
album: '平猫的歌曲',
cover: 'img/123.jpg',
mp3: 'Songs/00123.mp3',
ogg: ''
},
{
title: '把酒当歌',
artist: '吴涤清',
album: '平猫的歌曲',
cover: 'img/88.jpg',
mp3: 'Songs/00088.mp3',
ogg: ''
},
{
title: '烟花三月',
artist: '吴涤清',
album: '平猫的歌曲',
cover: 'img/83.jpg',
mp3: 'Songs/00083.mp3',
ogg: ''
},
{
title: '特别的爱给特别的你',
artist: '伍思凯',
album: '平猫的歌曲',
cover: 'img/76.jpg',
mp3: 'Songs/00076.mp3',
ogg: ''
},
{
title: '笑脸',
artist: '谢东',
album: '平猫的歌曲',
cover: 'img/81.jpg',
mp3: 'Songs/00081.mp3',
ogg: ''
},
{
title: '血娃娃',
artist: '谢容儿',
album: '平猫的歌曲',
cover: 'img/60.jpg',
mp3: 'Songs/00060.mp3',
ogg: ''
},
{
title: '思念天边的你',
artist: '谢世超',
album: '平猫的歌曲',
cover: 'img/11.jpg',
mp3: 'Songs/00011.mp3',
ogg: ''
},
{
title: '一起来港湘潭话(湘潭话)',
artist: '徐凯',
album: '平猫的歌曲',
cover: 'img/124.jpg',
mp3: 'Songs/00124.mp3',
ogg: ''
},
{
title: '别亦难',
artist: '徐小凤',
album: '平猫的歌曲',
cover: 'img/125.jpg',
mp3: 'Songs/00125.mp3',
ogg: ''
},
{
title: '明月千里寄相思',
artist: '徐小凤',
album: '平猫的歌曲',
cover: 'img/129.jpg',
mp3: 'Songs/00129.mp3',
ogg: ''
},
{
title: '大号是中华(粤语)',
artist: '徐小明',
album: '平猫的歌曲',
cover: 'img/151.jpg',
mp3: 'Songs/00151.mp3',
ogg: ''
},
{
title: '霍东阁(粤语)',
artist: '徐小明',
album: '平猫的歌曲',
cover: 'img/152.jpg',
mp3: 'Songs/00152.mp3',
ogg: ''
},
{
title: '摇摇摇',
artist: '许丽丽',
album: '平猫的歌曲',
cover: 'img/67.jpg',
mp3: 'Songs/00067.mp3',
ogg: ''
},
{
title: '菁菁校园(清唱)',
artist: '杨庆煌',
album: '平猫的歌曲',
cover: 'img/96.jpg',
mp3: 'Songs/00096.mp3',
ogg: ''
},
{
title: '九月',
artist: '杨山',
album: '平猫的歌曲',
cover: 'img/113.jpg',
mp3: 'Songs/00113.mp3',
ogg: ''
},
{
title: '洋葱',
artist: '杨宗纬',
album: '平猫的歌曲',
cover: 'img/116.jpg',
mp3: 'Songs/00116.mp3',
ogg: ''
},
{
title: '长亭外',
artist: '佚名',
album: '平猫的歌曲',
cover: 'img/126.jpg',
mp3: 'Songs/00126.mp3',
ogg: ''
},
{
title: '红河谷',
artist: '佚名',
album: '平猫的歌曲',
cover:'img/43.jpg',
mp3: 'Songs/00043.mp3',
ogg: ''
},
{
title: '白色恋人',
artist: '游鸿明',
album: '平猫的歌曲',
cover:'img/28.jpg',
mp3: 'Songs/00028.mp3',
ogg: ''
},
{
title: '下沙',
artist: '游鸿明',
album: '平猫的歌曲',
cover:'img/19.jpg',
mp3: 'Songs/00019.mp3',
ogg: ''
},
{
title: '让我一次爱个够',
artist: '庾澄庆',
album: '平猫的歌曲',
cover: 'img/42.jpg',
mp3: 'Songs/00042.mp3',
ogg: ''
},
{
title: '最美',
artist: '羽泉',
album: '平猫的歌曲',
cover: 'img/77.jpg',
mp3: 'Songs/00077.mp3',
ogg: ''
},
{
title: '美酒加咖啡',
artist: '余天',
album: '平猫的歌曲',
cover: 'img/14.jpg',
mp3: 'Songs/00014.mp3',
ogg: ''
},
{
title: '一杯苦咖啡',
artist: '余天',
album: '平猫的歌曲',
cover: 'img/122.jpg',
mp3: 'Songs/00122.mp3',
ogg: ''
},
{
title: '狮子座',
artist: '曾轶可',
album: '平猫的歌曲',
cover: 'img/54.jpg',
mp3: 'Songs/00054.mp3',
ogg: ''
},
{
title: '天堂里有没有车来车往',
artist: '张恒',
album: '平猫的歌曲',
cover: 'img/84.jpg',
mp3: 'Songs/00084.mp3',
ogg: ''
},
{
title: '断点',
artist: '张敬轩',
album: '平猫的歌曲',
cover: 'img/32.jpg',
mp3: 'Songs/00032.mp3',
ogg: ''
},
{
title: '爸爸的草鞋',
artist: '张明敏',
album: '平猫的歌曲',
cover: 'img/33.jpg',
mp3: 'Songs/00033.mp3',
ogg: ''
},
{
title: '梦驼铃',
artist: '张明敏',
album: '平猫的歌曲',
cover:'img/37.jpg',
mp3: 'Songs/00037.mp3',
ogg: ''
},
{
title: '乡间的小路',
artist: '张明敏',
album: '平猫的歌曲',
cover: 'img/87.jpg',
mp3: 'Songs/00087.mp3',
ogg: ''
},
{
title: '欧若拉',
artist: '张韶涵',
album: '平猫的歌曲',
cover: 'img/92.jpg',
mp3: 'Songs/00092.mp3',
ogg: ''
},
{
title: '讨学钱(花鼓戏)',
artist: '张天相',
album: '平猫的歌曲',
cover: 'img/103.jpg',
mp3: 'Songs/00103.mp3',
ogg: ''
},
{
title: '信仰',
artist: '张信哲',
album: '平猫的歌曲',
cover: 'img/26.jpg',
mp3: 'Songs/00026.mp3',
ogg: ''
},
{
title: '成功的路不止一条',
artist: '张行',
album: '平猫的歌曲',
cover: 'img/41.jpg',
mp3: 'Songs/00041.mp3',
ogg: ''
},
{
title: '迟到',
artist: '张行',
album: '平猫的歌曲',
cover: 'img/86.jpg',
mp3: 'Songs/00086.mp3',
ogg: ''
},
{
title: '恰似你的温柔',
artist: '张行',
album: '平猫的歌曲',
cover: 'img/89.jpg',
mp3: 'Songs/00089.mp3',
ogg: ''
},
{
title: '小秘密',
artist: '张行',
album: '平猫的歌曲',
cover: 'img/115.jpg',
mp3: 'Songs/00115.mp3',
ogg: ''
},
{
title: '雨中即景',
artist: '张行',
album: '平猫的歌曲',
cover: 'img/85.jpg',
mp3: 'Songs/00085.mp3',
ogg: ''
},
{
title: '一条路',
artist: '张行',
album: '平猫的歌曲',
cover: 'img/20.jpg',
mp3: 'Songs/00020.mp3',
ogg: ''
},
{
title: '情网',
artist: '张学友',
album: '平猫的歌曲',
cover: 'img/133.jpg',
mp3: 'Songs/00133.mp3',
ogg: ''
},
{
title: '听海',
artist: '张学友',
album: '平猫的歌曲',
cover: 'img/167.jpg',
mp3: 'Songs/00167.mp3',
ogg: ''
},
{
title: '一路上有你',
artist: '张学友',
album: '平猫的歌曲',
cover: 'img/74.jpg',
mp3: 'Songs/00074.mp3',
ogg: ''
},
{
title: '大女人',
artist: '张宇',
album: '平猫的歌曲',
cover: 'img/49.jpg',
mp3: 'Songs/00049.mp3',
ogg: ''
},
{
title: '给你们',
artist: '张宇',
album: '平猫的歌曲',
cover: 'img/65.jpg',
mp3: 'Songs/00065.mp3',
ogg: ''
},
{
title: '合影留念',
artist: '张宇',
album: '平猫的歌曲',
cover:'img/46.jpg',
mp3: 'Songs/00046.mp3',
ogg: ''
},
{
title: '没关系',
artist: '张宇',
album: '平猫的歌曲',
cover: 'img/48.jpg',
mp3: 'Songs/00048.mp3',
ogg: ''
},
{
title: '你的现在',
artist: '张宇',
album: '平猫的歌曲',
cover: 'img/45.jpg',
mp3: 'Songs/00045.mp3',
ogg: ''
},
{
title: '囚鸟',
artist: '张宇',
album: '平猫的歌曲',
cover: 'img/101.jpg',
mp3: 'Songs/00101.mp3',
ogg: ''
},
{
title: '曲终人散',
artist: '张宇',
album: '平猫的歌曲',
cover:'img/4.jpg',
mp3: 'Songs/00004.mp3',
ogg: ''
},
{
title: '沙漠海',
artist: '张宇',
album: '平猫的歌曲',
cover: 'img/27.jpg',
mp3: 'Songs/00027.mp3',
ogg: ''
},
{
title: '我被爱打败',
artist: '张宇',
album: '平猫的歌曲',
cover: 'img/44.jpg',
mp3: 'Songs/00044.mp3',
ogg: ''
},
{
title: '小小的太阳',
artist: '张宇',
album: '平猫的歌曲',
cover: 'img/165.jpg',
mp3: 'Songs/00165.mp3',
ogg: ''
},
{
title: '一个人的天荒地老',
artist: '张宇',
album: '平猫的歌曲',
cover: 'img/5.jpg',
mp3: 'Songs/00005.mp3',
ogg: ''
},
{
title: '用心良苦',
artist: '张宇',
album: '平猫的歌曲',
cover: 'img/64.jpg',
mp3: 'Songs/00064.mp3',
ogg: ''
},
{
title: '雨一直下',
artist: '张宇',
album: '平猫的歌曲',
cover: 'img/63.jpg',
mp3: 'Songs/00063.mp3',
ogg: ''
},
{
title: '月亮惹的祸',
artist: '张宇',
album: '平猫的歌曲',
cover: 'img/59.jpg',
mp3: 'Songs/00059.mp3',
ogg: ''
},
{
title: '放你的真心在我的手心',
artist: '张智成',
album: '平猫的歌曲',
cover: 'img/112.jpg',
mp3: 'Songs/00112.mp3',
ogg: ''
},
{
title: '后来',
artist: '张智成',
album: '平猫的歌曲',
cover: 'img/144.jpg',
mp3: 'Songs/00144.mp3',
ogg: ''
},
{
title: '停格',
artist: '郑伽文',
album: '平猫的歌曲',
cover: 'img/35.jpg',
mp3: 'Songs/00035.mp3',
ogg: ''
},
{
title: '绝口不提！爱你',
artist: '郑中基',
album: '平猫的歌曲',
cover: 'img/12.jpg',
mp3: 'Songs/00012.mp3',
ogg: ''
},
{
title: '寂寞沙洲岭',
artist: '周传雄',
album: '平猫的歌曲',
cover: 'img/100.jpg',
mp3: 'Songs/00100.mp3',
ogg: ''
},
{
title: '夜色阑珊',
artist: '周峰',
album: '平猫的歌曲',
cover: 'img/82.jpg',
mp3: 'Songs/00082.mp3',
ogg: ''
},
{
title: '刀剑如梦',
artist: '周华健',
album: '平猫的歌曲',
cover: 'img/163.jpg',
mp3: 'Songs/00163.mp3',
ogg: ''
},
{
title: '花心',
artist: '周华健',
album: '平猫的歌曲',
cover: 'img/158.jpg',
mp3: 'Songs/00158.mp3',
ogg: ''
},
{
title: '黑色幽默',
artist: '周杰伦',
album: '平猫的歌曲',
cover: 'img/117.jpg',
mp3: 'Songs/00117.mp3',
ogg: ''
},
];






	// Load playlist
	for (var i=0; i<playlist1.length; i++){
		var item = playlist1[i];
		$('#playlist').append('<li>'+item.artist+' - '+item.title+'</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist1.length : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	}

	// Update progress
	var setProgress = function(value){
		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value/60)+':'+currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	}

	var updateProgress = function(){
		setProgress(audio.currentTime);
	}

	// Progress slider
	$('.progress .slider').slider({step: 0.1, slide: function(event, ui){
		$(this).addClass('enable');
		setProgress(audio.duration * ui.value / 100);
		clearInterval(timeout);
	}, stop: function(event, ui){
		audio.currentTime = audio.duration * ui.value / 100;
		$(this).removeClass('enable');
		timeout = setInterval(updateProgress, 500);
	}});

	// Volume slider
	var setVolume = function(value){
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	}

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
		setVolume(ui.value);
		$(this).addClass('enable');
		$('.mute').removeClass('enable');
	}, stop: function(){
		$(this).removeClass('enable');
	}}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist1.length - 1;
		} else if (i >= playlist1.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	}

	// Shuffle
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist1.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist1.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	}

	// Fire when track loaded completely
	var afterLoad = function(){
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function(i){
		var item = playlist1[i],
			newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
		$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+item.artist+'</span><span class="album">'+item.album+'</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');
	} else if (repeat == 2){
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function(){
		if ($(this).hasClass('once')){
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')){
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
})(jQuery);

