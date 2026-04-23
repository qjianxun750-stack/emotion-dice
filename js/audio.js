// 音效管理
const AudioController = {
    // 摇骰子音效
    rollSound: null,
    // 结果音效
    resultSound: null,
    // 背景音乐
    bgMusic: null,
    
    init() {
        // 创建摇骰子音效（使用Web Audio API生成）
        this.rollSound = this.createRollSound();
        this.resultSound = this.createResultSound();
    },
    
    // 创建摇骰子音效
    createRollSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        return {
            context: audioContext,
            play() {
                // 创建多个短促的撞击声
                for (let i = 0; i < 6; i++) {
                    setTimeout(() => {
                        const oscillator = audioContext.createOscillator();
                        const gainNode = audioContext.createGain();
                        
                        oscillator.connect(gainNode);
                        gainNode.connect(audioContext.destination);
                        
                        oscillator.frequency.value = 800 + Math.random() * 400;
                        oscillator.type = 'square';
                        
                        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
                        
                        oscillator.start(audioContext.currentTime);
                        oscillator.stop(audioContext.currentTime + 0.05);
                    }, i * 150);
                }
            }
        };
    },
    
    // 创建结果音效（欢快的音效）
    createResultSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        return {
            context: audioContext,
            play() {
                // 播放上升的音阶
                const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
                notes.forEach((freq, index) => {
                    setTimeout(() => {
                        const oscillator = audioContext.createOscillator();
                        const gainNode = audioContext.createGain();
                        
                        oscillator.connect(gainNode);
                        gainNode.connect(audioContext.destination);
                        
                        oscillator.frequency.value = freq;
                        oscillator.type = 'sine';
                        
                        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                        
                        oscillator.start(audioContext.currentTime);
                        oscillator.stop(audioContext.currentTime + 0.3);
                    }, index * 100);
                });
            }
        };
    },
    
    // 播放摇骰子音效
    playRoll() {
        if (this.rollSound) {
            this.rollSound.play();
        }
    },
    
    // 播放结果音效
    playResult() {
        if (this.resultSound) {
            this.resultSound.play();
        }
    }
};
