// ========== 骰子配置数据 ==========
const DICE_CONFIG = [
    {
        id: 'status',
        name: '今日状态',
        color: '#FF6B6B',
        faces: [
            { word: '小爷来了', emoji: '😎', desc: '今天有气势，冲！适合主动出击、表达自我' },
            { word: '清醒的NPC', emoji: '🤖', desc: '今天配合，但心里明白。表面营业，内心清醒' },
            { word: '我在哪', emoji: '😵', desc: '今天有点迷，找不到自己。允许自己迷茫一会儿' },
            { word: '电量不足', emoji: '🪫', desc: '今天没能量，别指望我。好好休息也是正事' },
            { word: '继续营业', emoji: '😐', desc: '今天正常运转，没感情。完成该完成的就好' },
            { word: '我爱工作', emoji: '😅', desc: '今天认命了，上吧。自嘲也是一种力量' }
        ]
    },
    {
        id: 'crazy',
        name: '今日发疯',
        color: '#FF006E',
        faces: [
            { word: '想消失一下', emoji: '👻', desc: '不是真的消失，就是想从所有人的视线里消失三天' },
            { word: '想说不', emoji: '🙅', desc: '今天有一百个请求，我想全部拒绝' },
            { word: '想原地爆炸', emoji: '💥', desc: '今天积累的东西太多，需要一个出口' },
            { word: '想哭一场', emoji: '😭', desc: '不是真的很难过，就是需要哭一下' },
            { word: '想跑路', emoji: '🏃', desc: '不是真的跑，就是想消失在一个没人认识我的地方' },
            { word: '想摔东西', emoji: '💢', desc: '不是真的摔，就是需要那个动作' }
        ]
    },
    {
        id: 'wish',
        name: '今日祈愿',
        color: '#8338EC',
        faces: [
            { word: '万一呢', emoji: '🍀', desc: '今天求个好运，信一半。留条退路，也留点期待' },
            { word: '求个心安', emoji: '🙏', desc: '今天不求别的，就求踏实。心安就好' },
            { word: '我委屈我不哭', emoji: '😢', desc: '今天求被看见，求一点点认可' },
            { word: '好话连连', emoji: '✨', desc: '今天只接受好消息，坏的不收' },
            { word: '静待时机', emoji: '⏳', desc: '今天不急，等。时机到了自然成' },
            { word: '算了算了', emoji: '🤷', desc: '今天什么都不求了，随缘' }
        ]
    },
    {
        id: 'metaphysics',
        name: '今日玄学',
        color: '#FFB703',
        faces: [
            { word: '万一呢', emoji: '🎲', desc: '今天信一半，留条退路。玄学也要理性' },
            { word: '半信半得劲', emoji: '😏', desc: '今天不全信，但信了就踏实' },
            { word: '好运批发中', emoji: '🎊', desc: '今天运气来了，接好。准备好迎接好消息' },
            { word: '求个心安而已', emoji: '☯️', desc: '今天不求别的，就求不出事' },
            { word: '静待时机', emoji: '🌙', desc: '今天不急，老天自有安排' },
            { word: '随缘了', emoji: '🍃', desc: '今天不求了，爱咋咋地' }
        ]
    },
    {
        id: 'relationship',
        name: '今日关系',
        color: '#FB5607',
        faces: [
            { word: '自觉的背景板', emoji: '🎭', desc: '今天我在场，但不是主角。当个安静的观众' },
            { word: '沉默式应答', emoji: '😶', desc: '今天有人说话，我在听，但没在听' },
            { word: '隐形出席者', emoji: '👤', desc: '今天人在心不在，全程在线离线' },
            { word: '社交耗材', emoji: '🔋', desc: '今天又被消耗了，什么都没留下' },
            { word: '气氛组成员', emoji: '🎉', desc: '今天撑了全场，散场各回各家' },
            { word: '我委屈我不哭', emoji: '💔', desc: '今天有话没说，咽下去了' }
        ]
    },
    {
        id: 'life',
        name: '今日人生',
        color: '#3A86FF',
        faces: [
            { word: '我在哪', emoji: '🌫️', desc: '今天迷失了，不知道自己在哪里。允许迷路' },
            { word: '回不去了', emoji: '🚪', desc: '今天突然想起从前，但门已经关上了' },
            { word: '将就着吧', emoji: '😌', desc: '今天不追求了，过得去就行' },
            { word: '还没想好', emoji: '🤔', desc: '今天没有答案，但也不急着找' },
            { word: '再等等', emoji: '⏰', desc: '今天不动，等一个说不清楚的什么' },
            { word: '就这样吧', emoji: '🍂', desc: '今天接受了，不挣扎了' }
        ]
    },
    {
        id: 'mom',
        name: '今日妈妈',
        color: '#06FFB4',
        faces: [
            { word: '沉默式应答', emoji: '😑', desc: '今天听见了，但没收到。左耳进右耳出' },
            { word: '我知道了', emoji: '📢', desc: '今天第八百次听这句话，第八百次这样回' },
            { word: '随你吧', emoji: '🤲', desc: '今天不争了，你说什么都行' },
            { word: '嗯', emoji: '😶', desc: '今天只有这一个字，但这个字装了很多东西' },
            { word: '好好好', emoji: '👍', desc: '今天全部答应，一个都不会做' },
            { word: '下次吧', emoji: '⏭️', desc: '今天用这三个字挡住了所有问题' }
        ]
    },
    {
        id: 'partner',
        name: '今日搭子',
        color: '#FF69B4',
        faces: [
            { word: '今天不想说话', emoji: '🤐', desc: '今天需要搭子，但不需要交流，就是陪着' },
            { word: '今天AA', emoji: '💰', desc: '今天是纯粹的搭子关系，干净，没有负担' },
            { word: '今天我请', emoji: '🎁', desc: '今天心情好，或者需要被需要' },
            { word: '今天你说了算', emoji: '👑', desc: '今天不想做决定，全交给你' },
            { word: '今天各玩各的', emoji: '🎮', desc: '今天在一起，但不互相打扰' },
            { word: '今天不散', emoji: '🌟', desc: '今天不想回家，多待一会儿' }
        ]
    },
    // ========== 组合骰子：今日一卦·因态果 ==========
    {
        id: 'today-cause',
        name: '今日一卦',
        type: 'combo', // 标记为组合骰子
        subDice: ['cause', 'attitude', 'result'],
        subNames: ['因', '态', '果'],
        color: '#8B5CF6',
        description: '今日一卦 · 因态果',
        combo: [
            {
                subId: 'cause',
                name: '今日之因',
                faces: [
                    { word: '自找的', emoji: '🙋', desc: '今天的麻烦是自己造的，心知肚明' },
                    { word: '命该如此', emoji: '🌟', desc: '今天的事不怪自己，老天安排的' },
                    { word: '被坑了', emoji: '🕳️', desc: '今天有人挖坑，自己跳进去了' },
                    { word: '没想到', emoji: '😲', desc: '今天出了意外，完全没料到' },
                    { word: '早该如此', emoji: '⏰', desc: '今天发生的，其实早就该发生了' },
                    { word: '说不清', emoji: '🌫️', desc: '今天的原因理不清楚，反正就这样了' }
                ]
            },
            {
                subId: 'attitude',
                name: '今日之态',
                faces: [
                    { word: '小爷来了', emoji: '😎', desc: '今天有气势，冲' },
                    { word: '沉默式应答', emoji: '🤐', desc: '今天配合，但心里有数' },
                    { word: '随缘了', emoji: '🍃', desc: '今天不挣扎，交给命运' },
                    { word: '继续营业', emoji: '😐', desc: '今天正常运转，没有感情' },
                    { word: '我委屈我不哭', emoji: '😢', desc: '今天憋着，但撑着' },
                    { word: '清醒的NPC', emoji: '🤖', desc: '今天看透了，但选择不动' }
                ]
            },
            {
                subId: 'result',
                name: '今日之果',
                faces: [
                    { word: '船到桥头自然直', emoji: '🚢', desc: '今天的事到时候自然解决' },
                    { word: '下个月再说', emoji: '📅', desc: '今天的问题推给未来的自己' },
                    { word: '万一呢', emoji: '🍀', desc: '今天留一线希望，说不定有转机' },
                    { word: '就这样吧', emoji: '🤷', desc: '今天接受结果，不挣扎了' },
                    { word: '算了算了', emoji: '👋', desc: '今天不要结果了，放下' },
                    { word: '挺好的', emoji: '✨', desc: '今天结局不错，或者假装不错' }
                ]
            }
        ]
    },
    // ========== 组合骰子：人生一卦·天人地 ==========
    {
        id: 'life-destiny',
        name: '人生一卦',
        type: 'combo', // 标记为组合骰子
        subDice: ['heaven', 'human', 'earth'],
        subNames: ['天', '人', '地'],
        color: '#059669',
        description: '人生一卦 · 天人地',
        combo: [
            {
                subId: 'heaven',
                name: '天·势',
                faces: [
                    { word: '顺势', emoji: '🌊', desc: '这件事是对的，跟着走' },
                    { word: '逆势', emoji: '⛰️', desc: '这件事是错的，但你在做' },
                    { word: '无势', emoji: '🌫️', desc: '这件事没有方向，随机的' },
                    { word: '蓄势', emoji: '🌱', desc: '这件事在积累，还没到时候' },
                    { word: '破势', emoji: '⚡', desc: '这件事要打破什么，需要勇气' },
                    { word: '守势', emoji: '🛡️', desc: '这件事不要动，守住就行' }
                ]
            },
            {
                subId: 'human',
                name: '人·位',
                faces: [
                    { word: '主角', emoji: '👑', desc: '这件事我说了算，我来决定' },
                    { word: '配角', emoji: '🤝', desc: '这件事我在协助别人，不是主导' },
                    { word: '旁观者', emoji: '👀', desc: '这件事跟我有关，但我选择看着' },
                    { word: '局中人', emoji: '🎭', desc: '这件事我已经在里面了，出不去' },
                    { word: '局外人', emoji: '🚪', desc: '这件事我可以不参与，我有选择' },
                    { word: '棋子', emoji: '♟️', desc: '这件事我被人安排了，身不由己' }
                ]
            },
            {
                subId: 'earth',
                name: '地·时',
                faces: [
                    { word: '动', emoji: '▶️', desc: '现在是时候了，行动' },
                    { word: '等', emoji: '⏳', desc: '现在不是时候，再等等' },
                    { word: '退', emoji: '◀️', desc: '现在需要后退一步，让一让' },
                    { word: '进', emoji: '⏩', desc: '现在可以往前走，机会来了' },
                    { word: '止', emoji: '⏸️', desc: '现在停下来，不要再往前了' },
                    { word: '观', emoji: '👁️', desc: '现在什么都不做，先看着' }
                ]
            }
        ]
    }
];

// ========== 全局状态 ==========
let currentDiceIndex = 0;
let isRolling = false;
let currentResult = null;
let history = [];
let currentMode = 'single'; // 'single' 或 'combo'
let currentComboIndex = -1; // 当前选择的组合骰子索引

// ========== 玩法模式切换 ==========
function switchMode(mode) {
    currentMode = mode;

    // 更新模式按钮状态
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.mode === mode) {
            tab.classList.add('active');
        }
    });

    // 切换显示区域
    const diceSelector = document.getElementById('diceSelector');
    const comboSelector = document.getElementById('comboSelector');

    if (mode === 'single') {
        diceSelector.style.display = 'block';
        comboSelector.style.display = 'none';
        initDiceTabs(); // 重新加载单骰子列表
        currentComboIndex = -1;
        updateDiceArea();
    } else {
        diceSelector.style.display = 'none';
        comboSelector.style.display = 'block';
        initComboTabs(); // 加载组合骰子列表
        currentDiceIndex = -1;
        updateDiceArea();
    }
}

// ========== 初始化组合骰子标签 ==========
function initComboTabs() {
    const container = document.getElementById('comboCards');
    container.innerHTML = '';

    // 获取所有组合骰子
    const comboDice = DICE_CONFIG.filter(dice => dice.type === 'combo');

    if (comboDice.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: white; padding: 20px;">暂无组合骰子</p>';
        return;
    }

    comboDice.forEach((dice, index) => {
        const card = document.createElement('div');
        card.className = 'combo-card';
        if (currentComboIndex === index) {
            card.classList.add('selected');
        }

        // 查找原始配置中的真实索引
        const realIndex = DICE_CONFIG.findIndex(d => d.id === dice.id);

        card.innerHTML = `
            <span class="combo-icon">🎲</span>
            <div class="combo-title">${dice.name}</div>
            <div class="combo-desc">${dice.description}</div>
            <div class="combo-dice-preview">
                ${dice.subNames.map(name => `<span>${name}</span>`).join('')}
            </div>
        `;

        card.onclick = () => {
            currentComboIndex = realIndex;
            document.querySelectorAll('.combo-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            updateDiceArea();
        };

        container.appendChild(card);
    });
}

// ========== 修改原有的初始化函数 ==========

// ========== 初始化 ==========
window.onload = function() {
    try {
        initDiceTabs();
        initComboTabs(); // 初始化组合骰子标签
        loadDiceFaces();
        loadHistory();
        updateDiceArea(); // 更新骰子区域提示

        // 初始化音效（安全模式）
        try {
            AudioController.init();
        } catch (e) {
            console.warn('音效初始化失败:', e);
        }

        // 初始化本地统计
        try {
            StatsController.init();
        } catch (e) {
            console.warn('本地统计初始化失败:', e);
        }

        // 初始化全局统计（异步，不阻塞页面）
        try {
            if (typeof GlobalStatsController !== 'undefined') {
                GlobalStatsController.init();
            }
        } catch (e) {
            console.warn('全局统计初始化失败:', e);
        }

        // 绑定骰子点击事件
        document.getElementById('diceContainer').addEventListener('click', rollDice);

        // 从 localStorage 读取上次使用的骰子
        const savedDiceIndex = localStorage.getItem('lastDiceIndex');
        if (savedDiceIndex !== null) {
            currentDiceIndex = parseInt(savedDiceIndex);
            updateDiceTabs();
            loadDiceFaces();
            // 设置主题背景
            document.body.classList.add(`theme-${DICE_CONFIG[currentDiceIndex].id}`);
        } else {
            // 默认设置第一个主题背景
            document.body.classList.add(`theme-${DICE_CONFIG[0].id}`);
        }
    } catch (error) {
        console.error('初始化错误:', error);
        // 确保页面至少能显示基本内容
    }
};

// 添加全局错误处理，防止单个错误导致页面崩溃
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.message, e.filename, e.lineno);
    // 不阻止默认行为，让页面继续运行
});

// ========== 骰子主题切换 ==========
function initDiceTabs() {
    const cardsContainer = document.getElementById('diceCards');
    cardsContainer.innerHTML = '';

    // 只显示单骰子模式（过滤掉 type: 'combo' 的骰子）
    const singleDice = DICE_CONFIG.filter(dice => dice.type !== 'combo');

    singleDice.forEach((dice, filteredIndex) => {
        // 获取原始索引
        const index = DICE_CONFIG.findIndex(d => d.id === dice.id);
        const card = document.createElement('div');
        card.className = 'dice-card';
        card.dataset.dice = dice.id;

        // 为每个骰子添加描述
        const descriptions = {
            'status': '今天什么状态？',
            'crazy': '想发疯吗？',
            'wish': '求个好运',
            'metaphysics': '信个玄学',
            'relationship': '关系怎么样？',
            'life': '人生感悟',
            'mom': '妈妈的唠叨',
            'partner': '搭子社交'
        };

        card.innerHTML = `
            <span class="dice-card-icon">${dice.faces[0].emoji}</span>
            <span class="dice-card-name">${dice.name}</span>
            <span class="dice-card-desc">${descriptions[dice.id] || dice.name}</span>
        `;

        card.onclick = () => selectDice(index);
        cardsContainer.appendChild(card);
    });

    updateDiceCards();
}

function updateDiceCards() {
    const cards = document.querySelectorAll('.dice-card');
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentDiceIndex);
    });
}

function updatePageIndicator() {
    const totalPages = Math.ceil(DICE_CONFIG.length / 8);
    const currentPage = Math.floor(currentDiceIndex / 8) + 1;
    const indicator = document.getElementById('pageIndicator');
    if (indicator) {
        indicator.textContent = `${currentPage} / ${totalPages}`;
    }
}

function selectDice(index) {
    currentDiceIndex = index;
    updateDiceCards();
    updatePageIndicator();
    loadDiceFaces();
    updateDiceArea(); // 更新骰子区域提示
    localStorage.setItem('lastDiceIndex', index);

    // 切换主题背景
    const body = document.body;
    // 移除所有主题类
    DICE_CONFIG.forEach(dice => {
        body.classList.remove(`theme-${dice.id}`);
    });
    // 添加新主题类
    body.classList.add(`theme-${DICE_CONFIG[index].id}`);

    // 隐藏结果区
    document.getElementById('resultArea').style.display = 'none';
}

function prevDice() {
    currentDiceIndex = (currentDiceIndex - 1 + DICE_CONFIG.length) % DICE_CONFIG.length;
    selectDice(currentDiceIndex);
}

function nextDice() {
    currentDiceIndex = (currentDiceIndex + 1) % DICE_CONFIG.length;
    selectDice(currentDiceIndex);
}

// ========== 加载骰子面 ==========
function loadDiceFaces() {
    const dice = DICE_CONFIG[currentDiceIndex];

    for (let i = 0; i < 6; i++) {
        const face = dice.faces[i];
        document.getElementById(`emoji${i+1}`).textContent = face.emoji;
        document.getElementById(`word${i+1}`).textContent = face.word;
    }
}

// ========== 加载组合骰子面 ==========
function loadComboDiceFaces() {
    const combo = DICE_CONFIG[currentComboIndex];

    if (!combo || !combo.combo) {
        console.error('无效的组合骰子');
        return;
    }

    // 显示3个骰子的第一个面
    for (let i = 0; i < 3; i++) {
        const subDice = combo.combo[i];
        const face = subDice.faces[0]; // 默认显示第一个面
        document.getElementById(`emoji${i+1}`).textContent = face.emoji;
        document.getElementById(`word${i+1}`).textContent = face.word;
    }
}

// ========== 更新骰子区域 ==========
function updateDiceArea() {
    const diceArea = document.querySelector('.dice-area');
    const diceContainer = document.getElementById('diceContainer');
    const diceHint = document.getElementById('diceHint');

    if (currentMode === 'single' && currentDiceIndex >= 0) {
        // 单骰子模式
        const dice = DICE_CONFIG[currentDiceIndex];
        diceHint.textContent = `点击骰子摇一摇`;
        loadDiceFaces();
    } else if (currentMode === 'combo' && currentComboIndex >= 0) {
        // 组合骰子模式
        const combo = DICE_CONFIG[currentComboIndex];
        diceHint.textContent = `点击摇一摇，摇出${combo.name}`;
        loadComboDiceFaces();
    } else {
        diceHint.textContent = '请先选择骰子';
    }
}

// ========== 修改原有的初始化函数 ==========

// ========== 摇骰子 ==========
function rollDice() {
    if (isRolling) return;

    // 检查是否选择了骰子
    if (currentMode === 'single' && currentDiceIndex < 0) {
        alert('请先选择骰子');
        return;
    }
    if (currentMode === 'combo' && currentComboIndex < 0) {
        alert('请先选择组合');
        return;
    }

    // 如果是组合模式，调用组合摇骰
    if (currentMode === 'combo') {
        rollComboDice();
        return;
    }

    // 单骰子模式（原有逻辑）
    isRolling = true;
    const dice = document.getElementById('dice');
    const container = document.getElementById('diceContainer');
    const hint = document.getElementById('diceHint');

    // 隐藏结果区
    document.getElementById('resultArea').style.display = 'none';

    // 先抛起
    dice.classList.add('tossing');
    hint.textContent = '🎲 骰子飞起...';

    // 播放音效
    AudioController.playRoll();

    // 0.8秒后开始翻转
    setTimeout(() => {
        dice.classList.remove('tossing');
        dice.classList.add('rolling');
        hint.textContent = '🎲 转动中...';

        // 2秒后显示结果
        setTimeout(() => {
            dice.classList.remove('rolling');

            // 随机选择一个面（1-6）
            const faceIndex = Math.floor(Math.random() * 6);
            const result = DICE_CONFIG[currentDiceIndex].faces[faceIndex];

            // 计算最终旋转角度，让选中的面朝上
            const finalRotation = calculateFinalRotation(faceIndex);
            dice.style.transform = finalRotation;

            // 显示结果
            showResult(result);

            // 播放结果音效
            AudioController.playResult();

            // 触发粒子特效
            createParticles();
            createConfetti();

            // 保存到历史
            saveToHistory(result);

            // 记录统计到全局数据库
            GlobalStatsController.recordRoll(
                DICE_CONFIG[currentDiceIndex].name,
                DICE_CONFIG[currentDiceIndex].id,
                result
            );

            hint.textContent = '✨ 点击骰子再摇一次';
            isRolling = false;
        }, 2000);
    }, 800);
}

function calculateFinalRotation(faceIndex) {
    // 根据面的位置计算最终旋转角度
    const rotations = {
        0: 'rotateX(0deg) rotateY(0deg)',      // face-1
        1: 'rotateX(0deg) rotateY(180deg)',    // face-2
        2: 'rotateX(0deg) rotateY(-90deg)',    // face-3
        3: 'rotateX(0deg) rotateY(90deg)',     // face-4
        4: 'rotateX(-90deg) rotateY(0deg)',    // face-5
        5: 'rotateX(90deg) rotateY(0deg)'      // face-6
    };
    return rotations[faceIndex] || rotations[0];
}

// ========== 显示结果 ==========
function showResult(result) {
    currentResult = result;

    const resultArea = document.getElementById('resultArea');
    resultArea.style.display = 'block';

    // 自动生成分享图（会在resultArea中显示）
    generateShareImage();

    // 滚动到结果区
    setTimeout(() => {
        resultArea.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 100);
}

// ========== 组合骰子摇骰 ==========
function rollComboDice() {
    isRolling = true;
    const dice = document.getElementById('dice');
    const hint = document.getElementById('diceHint');

    // 隐藏结果区
    document.getElementById('resultArea').style.display = 'none';

    const combo = DICE_CONFIG[currentComboIndex];

    // 先抛起
    dice.classList.add('tossing');
    hint.textContent = `🎲 ${combo.name} 骰子飞起...`;

    // 播放音效
    AudioController.playRoll();

    // 0.8秒后开始翻转
    setTimeout(() => {
        dice.classList.remove('tossing');
        dice.classList.add('rolling');
        hint.textContent = '🎲 转动中...';

        // 2秒后显示结果
        setTimeout(() => {
            dice.classList.remove('rolling');

            // 为3个子骰子各随机选择一个面
            const comboResults = [];
            for (let i = 0; i < 3; i++) {
                const faceIndex = Math.floor(Math.random() * 6);
                const result = combo.combo[i].faces[faceIndex];
                comboResults.push({
                    ...result,
                    subName: combo.combo[i].name,
                    subId: combo.combo[i].subId
                });
            }

            // 更新骰子面显示
            for (let i = 0; i < 3; i++) {
                document.getElementById(`emoji${i+1}`).textContent = comboResults[i].emoji;
                document.getElementById(`word${i+1}`).textContent = comboResults[i].word;
            }

            // 显示组合结果
            showComboResult(comboResults, combo);

            // 播放结果音效
            AudioController.playResult();

            // 触发粒子特效
            createParticles();
            createConfetti();

            // 保存到历史
            saveComboToHistory(comboResults, combo);

            isRolling = false;
        }, 2000);
    }, 800);
}

// ========== 显示组合结果 ==========
function showComboResult(results, combo) {
    // 生成解签文案
    const interpretation = generateInterpretation(results, combo);

    const resultArea = document.getElementById('resultArea');

    // 创建分享图内容
    const shareCard = document.getElementById('shareCard');

    // 更新分享卡片内容
    document.getElementById('shareEmoji').textContent = results.map(r => r.emoji).join(' + ');
    document.getElementById('shareWord').textContent = results.map(r => r.word).join(' + ');
    document.getElementById('shareDesc').textContent = interpretation;
    document.getElementById('shareDiceName').textContent = combo.name;
    document.getElementById('shareDate').textContent = new Date().toLocaleDateString('zh-CN');

    // 生成并显示分享图
    setTimeout(async () => {
        try {
            const canvas = document.getElementById('shareCanvas');
            const card = document.getElementById('shareCard');

            // 生成二维码
            document.getElementById('shareQRCode').innerHTML = '';
            new QRCode(document.getElementById('shareQRCode'), {
                text: window.location.href,
                width: 80,
                height: 80,
                colorDark: '#667eea',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });

            // 等待二维码生成
            await new Promise(resolve => setTimeout(resolve, 500));

            // 使用html2canvas生成图片
            const shareImage = await html2canvas(card, {
                backgroundColor: null,
                scale: 2,
                useCORS: true,
                logging: false
            });

            // 显示结果
            resultArea.style.display = 'block';
            const imgElement = document.getElementById('shareImageResult');
            imgElement.src = shareImage.toDataURL('image/png');

            // 滚动到结果区
            resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        } catch (error) {
            console.error('生成分享图失败:', error);
            // 失败时显示文本结果
            resultArea.style.display = 'block';
            document.getElementById('shareImageResult').alt = interpretation;
        }
    }, 100);

    // 记录统计
    try {
        GlobalStatsController.recordRoll(combo.id, combo.name, results[0].word, results[0].emoji, interpretation);
    } catch (e) {
        console.warn('全局统计记录失败:', e);
    }
}

// ========== 生成解签文案 ==========
function generateInterpretation(results, combo) {
    if (combo.id === 'today-cause') {
        // 今日一卦·因态果的解读
        const cause = results[0].word;
        const attitude = results[1].word;
        const result = results[2].word;

        const interpretations = [
            `今日之卦：${cause}的处境，${attitude}的面对，最终${result}。`,
            `这一卦说的是：今天${cause}，但你选择${attitude}，结果就是${result}。`,
            `卦象显示：${cause} + ${attitude} → ${result}`
        ];

        return interpretations[Math.floor(Math.random() * interpretations.length)];
    } else if (combo.id === 'life-destiny') {
        // 人生一卦·天人地的解读
        const heaven = results[0].word;
        const human = results[1].word;
        const earth = results[2].word;

        const interpretations = [
            `此卦显示：大势为${heaven}，你在其中是${human}，时机上应当${earth}。`,
            `卦象解读：${heaven}之势，${human}之位，${earth}之时。`,
            `这一卦告诉你：事情${heaven}，你是${human}，现在要${earth}。`
        ];

        return interpretations[Math.floor(Math.random() * interpretations.length)];
    }

    return results.map(r => r.word).join(' + ');
}

// ========== 保存组合结果到历史 ==========
function saveComboToHistory(results, combo) {
    const record = {
        type: 'combo',
        comboId: combo.id,
        comboName: combo.name,
        results: results,
        interpretation: generateInterpretation(results, combo),
        timestamp: new Date().toISOString()
    };

    history.unshift(record);
    if (history.length > 20) history.pop();

    try {
        localStorage.setItem('diceHistory', JSON.stringify(history));
        loadHistory();
    } catch (e) {
        console.warn('历史记录保存失败:', e);
    }
}

// ========== 单骰子再摇一次 ==========
function rollAgain() {
    document.getElementById('resultArea').style.display = 'none';
    setTimeout(() => rollDice(), 300);
}

// ========== 分享功能 ==========
function shareResult() {
    if (!currentResult) return;
    
    // 记录分享统计
    StatsController.recordShare();
    
    // 构建分享内容
    const shareText = `我今天的情绪骰子结果是：「${currentResult.word}」\n${currentResult.desc}\n\n快来试试你的情绪骰子吧！`;
    const shareUrl = window.location.href;
    
    // 尝试使用系统原生分享（手机端最有效）
    if (navigator.share) {
        navigator.share({
            title: '情绪骰子 - ' + currentResult.word,
            text: shareText,
            url: shareUrl
        }).then(() => {
            console.log('分享成功');
        }).catch((error) => {
            console.log('分享失败:', error);
            // 如果原生分享失败，显示分享选项
            showShareOptions(shareText, shareUrl);
        });
    } else {
        // 不支持原生分享，显示选项
        showShareOptions(shareText, shareUrl);
    }
}

// 显示分享选项
function showShareOptions(text, url) {
    const modal = document.getElementById('shareModal');
    const preview = document.getElementById('sharePreview');
    const modalTitle = document.getElementById('modalTitle');
    const modalActions = document.getElementById('modalActions');
    
    // 更新标题
    modalTitle.textContent = '选择分享方式';
    
    // 隐藏底部按钮
    modalActions.style.display = 'none';
    
    // 生成二维码
    const qrcodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
    
    preview.innerHTML = `
        <div style="padding: 20px;">
            <div style="display: grid; gap: 15px;">
                <button class="btn btn-primary" onclick="copyShareLink()" style="width: 100%;">
                    📋 复制链接
                </button>
                
                <button class="btn btn-secondary" onclick="shareToWechat()" style="width: 100%;">
                    💬 微信分享
                </button>
                
                <button class="btn btn-secondary" onclick="shareToQQ()" style="width: 100%;">
                    🐧 QQ分享
                </button>
                
                <button class="btn btn-secondary" onclick="shareToWeibo()" style="width: 100%;">
                    📢 微博分享
                </button>
                
                <div style="text-align: center; margin-top: 20px; padding: 20px; background: rgba(102, 126, 234, 0.1); border-radius: 15px;">
                    <p style="color: #666; margin-bottom: 10px;">📱 扫码访问</p>
                    <img src="${qrcodeUrl}" style="width: 200px; height: 200px; border-radius: 10px;" />
                </div>
                
                <button class="btn btn-secondary" onclick="closeModal(); resetModal();" style="width: 100%; margin-top: 10px;">
                    关闭
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

// 复制链接
function copyShareLink() {
    const url = window.location.href;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            alert('✅ 链接已复制！\n快去分享给朋友吧~');
            // 记录分享统计到全局数据库
            GlobalStatsController.recordShare('link',
                currentResult ? DICE_CONFIG[currentDiceIndex].name : null,
                currentResult ? currentResult.word : null
            );
        }).catch(() => {
            fallbackCopy(url);
        });
    } else {
        fallbackCopy(url);
    }
}

// 备用复制方法
function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        alert('✅ 链接已复制！\n快去分享给朋友吧~');
    } catch (err) {
        alert('复制失败，请手动复制：' + text);
    }
    
    document.body.removeChild(textarea);
}

// 微信分享提示
function shareToWechat() {
    const text = `我今天的情绪骰子结果是：「${currentResult.word}」\n${currentResult.desc}\n\n${window.location.href}`;

    // 复制链接
    copyShareLink();

    // 记录分享统计到全局数据库
    GlobalStatsController.recordShare('wechat',
        currentResult ? DICE_CONFIG[currentDiceIndex].name : null,
        currentResult ? currentResult.word : null
    );

    alert('💡 分享步骤：\n1. 链接已复制\n2. 打开微信\n3. 选择聊天\n4. 粘贴发送\n\n快去分享吧！');
}

// QQ分享
function shareToQQ() {
    const url = window.location.href;
    const title = `情绪骰子 - ${currentResult.word}`;
    const desc = currentResult.desc;

    const qqShareUrl = `https://connect.qq.com/share?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&desc=${encodeURIComponent(desc)}`;
    window.open(qqShareUrl, '_blank');

    // 记录分享统计到全局数据库
    GlobalStatsController.recordShare('qq',
        currentResult ? DICE_CONFIG[currentDiceIndex].name : null,
        currentResult ? currentResult.word : null
    );
}

// 微博分享
function shareToWeibo() {
    const url = window.location.href;
    const text = `我今天的情绪骰子结果是：「${currentResult.word}」 - ${currentResult.desc}`;

    const weiboShareUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
    window.open(weiboShareUrl, '_blank');

    // 记录分享统计到全局数据库
    GlobalStatsController.recordShare('weibo',
        currentResult ? DICE_CONFIG[currentDiceIndex].name : null,
        currentResult ? currentResult.word : null
    );
}

// ========== 历史记录 ==========
function saveToHistory(result) {
    const record = {
        diceName: DICE_CONFIG[currentDiceIndex].name,
        word: result.word,
        emoji: result.emoji,
        date: new Date().toLocaleString('zh-CN')
    };
    
    history.unshift(record);
    if (history.length > 20) history.pop(); // 最多保留20条
    
    localStorage.setItem('diceHistory', JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const saved = localStorage.getItem('diceHistory');
    if (saved) {
        history = JSON.parse(saved);
    }

    const listContainer = document.getElementById('historyList');
    listContainer.innerHTML = '';

    if (history.length === 0) {
        listContainer.innerHTML = '<p style="color: white; text-align: center; opacity: 0.7;">还没有记录，摇一次骰子吧！</p>';
        return;
    }

    history.slice(0, 10).forEach(record => {
        const item = document.createElement('div');
        item.className = 'history-item';

        // 判断是单骰子还是组合骰子
        if (record.type === 'combo') {
            // 组合骰子历史记录
            const emojis = record.results.map(r => r.emoji).join(' + ');
            const words = record.results.map(r => r.word).join(' + ');

            item.innerHTML = `
                <div class="history-item-left">
                    <span class="history-emoji">${emojis}</span>
                    <div>
                        <div class="history-word">${words}</div>
                        <div class="history-dice">${record.comboName}</div>
                    </div>
                </div>
                <div class="history-date">${new Date(record.timestamp).toLocaleDateString('zh-CN')}</div>
            `;
        } else {
            // 单骰子历史记录
            item.innerHTML = `
                <div class="history-item-left">
                    <span class="history-emoji">${record.emoji}</span>
                    <div>
                        <div class="history-word">${record.word}</div>
                        <div class="history-dice">${record.diceName}</div>
                    </div>
                </div>
                <div class="history-date">${record.date}</div>
            `;
        }

        listContainer.appendChild(item);
    });
}

// ========== 分享图生成 ==========
function generateShare() {
    if (!currentResult) return;

    // 记录分享统计到全局数据库
    GlobalStatsController.recordShare('image',
        DICE_CONFIG[currentDiceIndex].name,
        currentResult.word
    );

    // 填充分享图内容
    document.getElementById('shareEmoji').textContent = currentResult.emoji;
    document.getElementById('shareWord').textContent = currentResult.word;
    document.getElementById('shareDesc').textContent = currentResult.desc;
    document.getElementById('shareDiceName').textContent = DICE_CONFIG[currentDiceIndex].name;
    document.getElementById('shareDate').textContent = new Date().toLocaleDateString('zh-CN');

    // 设置背景色
    const shareCard = document.getElementById('shareCard');
    shareCard.style.background = `linear-gradient(135deg, ${DICE_CONFIG[currentDiceIndex].color} 0%, ${adjustColor(DICE_CONFIG[currentDiceIndex].color, -30)} 100%)`;

    // 使用html2canvas生成图片
    html2canvas(document.getElementById('shareCanvas'), {
        width: 375,
        height: 600,
        scale: 2,
        backgroundColor: null
    }).then(canvas => {
        // 显示预览
        const preview = document.getElementById('sharePreview');
        preview.innerHTML = '';
        const img = document.createElement('img');
        img.src = canvas.toDataURL('image/png');
        img.style.width = '100%';
        img.style.borderRadius = '10px';
        preview.appendChild(img);

        // 存储canvas数据供下载使用
        window.shareCanvasData = canvas.toDataURL('image/png');

        // 显示模态框
        document.getElementById('shareModal').classList.add('show');
    });
}

// 自动生成分享图（不显示模态框）
function generateShareImage() {
    if (!currentResult) return;

    // 填充分享图内容
    document.getElementById('shareEmoji').textContent = currentResult.emoji;
    document.getElementById('shareWord').textContent = currentResult.word;
    document.getElementById('shareDesc').textContent = currentResult.desc;
    document.getElementById('shareDiceName').textContent = DICE_CONFIG[currentDiceIndex].name;
    document.getElementById('shareDate').textContent = new Date().toLocaleDateString('zh-CN');

    // 清空并生成二维码（使用GitHub链接，兼容性更好）
    const qrCodeContainer = document.getElementById('shareQRCode');
    qrCodeContainer.innerHTML = '';

    const shareUrl = 'https://qjianxun750-stack.github.io/emotion-dice/';

    // 使用qrcode.js生成二维码
    new QRCode(qrCodeContainer, {
        text: shareUrl,
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
    });

    // 设置背景色
    const shareCard = document.getElementById('shareCard');
    shareCard.style.background = `linear-gradient(135deg, ${DICE_CONFIG[currentDiceIndex].color} 0%, ${adjustColor(DICE_CONFIG[currentDiceIndex].color, -30)} 100%)`;

    // 等待一小段时间确保二维码生成完成，然后生成分享图
    setTimeout(() => {
        html2canvas(document.getElementById('shareCanvas'), {
            width: 375,
            height: 600,
            scale: 3, // 提高scale使二维码更清晰
            backgroundColor: null,
            logging: false,
            useCORS: true
        }).then(canvas => {
            // 在结果区直接显示分享图
            const resultImage = document.getElementById('shareImageResult');
            resultImage.src = canvas.toDataURL('image/png');

            // 存储canvas数据供复制使用
            window.shareCanvasData = canvas.toDataURL('image/png');
            canvas.toBlob((blob) => {
                window.shareCanvasBlobData = blob;
            }, 'image/png');
        }).catch(error => {
            console.error('生成分享图失败:', error);
        });
    }, 500); // 等待500ms确保二维码生成
}

// 复制图片到剪贴板
async function copyImage() {
    try {
        // 创建剪贴板项
        const clipboardItem = new ClipboardItem({
            'image/png': window.shareCanvasBlobData
        });

        // 写入剪贴板
        await navigator.clipboard.write([clipboardItem]);

        // 显示提示
        alert('✅ 图片已复制！\n\n现在可以到微信/QQ等应用中粘贴发送了\n\n💡 提示：也可以长按图片保存到相册');

    } catch (error) {
        console.error('复制图片失败:', error);
        alert('❌ 复制失败，请尝试长按图片保存');
    }
}

function downloadShare() {
    if (!window.shareCanvasData) return;

    const link = document.createElement('a');
    link.download = `情绪骰子-${currentResult.word}-${new Date().getTime()}.png`;
    link.href = window.shareCanvasData;
    link.click();
}

function closeModal() {
    document.getElementById('shareModal').classList.remove('show');
}

// 重置模态框
function resetModal() {
    const modalTitle = document.getElementById('modalTitle');
    const modalActions = document.getElementById('modalActions');
    
    modalTitle.textContent = '分享你的情绪';
    modalActions.style.display = 'flex';
}

// 辅助函数：调整颜色亮度
function adjustColor(color, amount) {
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
    return '#' + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
}

// ========== 粒子特效 ==========
function createParticles() {
    const container = document.getElementById('particlesContainer');
    const diceArea = document.querySelector('.dice-area');
    const rect = diceArea.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#FFD93D', '#FF6B9D', '#C44569'];
    
    // 创建30个粒子
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const angle = (Math.PI * 2 * i) / 30;
        const distance = 100 + Math.random() * 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.width = (5 + Math.random() * 10) + 'px';
        particle.style.height = particle.style.width;
        
        container.appendChild(particle);
        
        // 1秒后移除
        setTimeout(() => particle.remove(), 1000);
    }
}

// 创建彩色纸屑
function createConfetti() {
    const container = document.getElementById('particlesContainer');
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#FFD93D', '#FF6B9D', '#C44569', '#667eea', '#764ba2'];
    
    // 创建20个纸屑
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-20px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            
            container.appendChild(confetti);
            
            // 4秒后移除
            setTimeout(() => confetti.remove(), 4000);
        }, i * 100);
    }
}

// ========== 手势支持（左右滑动切换骰子） ==========
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextDice(); // 左滑
        } else {
            prevDice(); // 右滑
        }
    }
}
