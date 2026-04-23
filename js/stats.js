// 数据统计管理
const StatsController = {
    // 统计数据
    data: {
        totalVisits: 0,        // 总访问次数
        totalRolls: 0,         // 总摇骰子次数
        totalShares: 0,        // 总分享次数
        diceRolls: {},         // 每套骰子的使用次数
        results: {},           // 每个结果的出现次数
        lastVisit: null,       // 最后访问时间
        dailyVisits: {},       // 每日访问统计
        dailyRolls: {}         // 每日摇骰统计
    },
    
    // 初始化
    init() {
        this.loadData();
        this.recordVisit();
    },
    
    // 加载数据
    loadData() {
        const saved = localStorage.getItem('diceStats');
        if (saved) {
            this.data = JSON.parse(saved);
        }
    },
    
    // 保存数据
    saveData() {
        localStorage.setItem('diceStats', JSON.stringify(this.data));
    },
    
    // 记录访问
    recordVisit() {
        const today = new Date().toISOString().split('T')[0];
        this.data.totalVisits++;
        this.data.lastVisit = new Date().toISOString();
        
        // 每日统计
        if (!this.data.dailyVisits[today]) {
            this.data.dailyVisits[today] = 0;
        }
        this.data.dailyVisits[today]++;
        
        this.saveData();
    },
    
    // 记录摇骰子
    recordRoll(diceName, result) {
        const today = new Date().toISOString().split('T')[0];
        this.data.totalRolls++;
        
        // 按骰子统计
        if (!this.data.diceRolls[diceName]) {
            this.data.diceRolls[diceName] = 0;
        }
        this.data.diceRolls[diceName]++;
        
        // 按结果统计
        if (!this.data.results[result]) {
            this.data.results[result] = 0;
        }
        this.data.results[result]++;
        
        // 每日统计
        if (!this.data.dailyRolls[today]) {
            this.data.dailyRolls[today] = 0;
        }
        this.data.dailyRolls[today]++;
        
        this.saveData();
    },
    
    // 记录分享
    recordShare() {
        this.data.totalShares++;
        this.saveData();
    },
    
    // 获取统计数据
    getStats() {
        return this.data;
    },
    
    // 获取热门结果
    getTopResults(limit = 10) {
        const results = Object.entries(this.data.results);
        return results
            .sort((a, b) => b[1] - a[1])
            .slice(0, limit)
            .map(([word, count]) => ({ word, count }));
    },
    
    // 获取热门骰子
    getTopDice(limit = 10) {
        const dice = Object.entries(this.data.diceRolls);
        return dice
            .sort((a, b) => b[1] - a[1])
            .slice(0, limit)
            .map(([name, count]) => ({ name, count }));
    },
    
    // 重置数据
    reset() {
        if (confirm('确定要重置所有统计数据吗？')) {
            this.data = {
                totalVisits: 0,
                totalRolls: 0,
                totalShares: 0,
                diceRolls: {},
                results: {},
                lastVisit: null,
                dailyVisits: {},
                dailyRolls: {}
            };
            this.saveData();
            alert('统计数据已重置');
        }
    }
};
