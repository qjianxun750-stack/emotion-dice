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
    }
];

// ========== 全局状态 ==========
let currentDiceIndex = 0;
let isRolling = false;
let currentResult = null;
let history = [];

// ========== 初始化 ==========
window.onload = function() {
    initDiceTabs();
    loadDiceFaces();
    loadHistory();

    // 初始化音效
    AudioController.init();

    // 初始化统计
    StatsController.init();

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
};

// ========== 骰子主题切换 ==========
function initDiceTabs() {
    const cardsContainer = document.getElementById('diceCards');
    cardsContainer.innerHTML = '';

    DICE_CONFIG.forEach((dice, index) => {
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

// ========== 摇骰子 ==========
function rollDice() {
    if (isRolling) return;
    
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

    document.getElementById('resultEmoji').textContent = result.emoji;
    document.getElementById('resultWord').textContent = result.word;
    document.getElementById('resultDesc').textContent = result.desc;

    const resultArea = document.getElementById('resultArea');
    resultArea.style.display = 'block';

    // 自动生成分享图
    generateShareImage();

    // 滚动到结果区
    setTimeout(() => {
        resultArea.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 100);
}

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

    // 设置背景色
    const shareCard = document.getElementById('shareCard');
    shareCard.style.background = `linear-gradient(135deg, ${DICE_CONFIG[currentDiceIndex].color} 0%, ${adjustColor(DICE_CONFIG[currentDiceIndex].color, -30)} 100%)`;

    // 使用html2canvas生成图片
    html2canvas(document.getElementById('shareCanvas'), {
        width: 375,
        height: 600,
        scale: 2,
        backgroundColor: null,
        logging: false
    }).then(canvas => {
        // 在结果区显示分享图
        const previewArea = document.getElementById('sharePreviewArea');
        const resultImage = document.getElementById('shareImageResult');

        resultImage.src = canvas.toDataURL('image/png');
        previewArea.style.display = 'block';

        // 存储canvas数据供复制使用
        window.shareCanvasData = canvas.toDataURL('image/png');
        window.shareCanvasBlob = canvas.toBlob((blob) => {
            window.shareCanvasBlobData = blob;
        }, 'image/png');
    }).catch(error => {
        console.error('生成分享图失败:', error);
    });
}

// 复制图片到剪贴板
async function copyImage() {
    try {
        // 创建剪贴板项
        const clipboardItem = new ClipboardItem({
            type: 'image/png',
            blob: window.shareCanvasBlobData
        });

        // 写入剪贴板
        await navigator.clipboard.write([clipboardItem]);

        // 显示提示
        alert('✅ 图片已复制到剪贴板！\n\n在微信中粘贴即可发送！\n\n提示：也可以长按上面的大图片保存');

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
