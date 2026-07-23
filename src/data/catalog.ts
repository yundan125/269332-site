export interface CatalogItem {
	name: string;
	summary: string;
	repository: string;
	category: string;
	status: string;
	visibility: 'public' | 'private';
	tags: string[];
}

export const tools: CatalogItem[] = [
	{
		name: 'OWCS Predictor',
		summary:
			'面向 OWCS 2026 Midseason Championship 小组赛的浏览器对战预测器，支持选择胜者、录入比分、编辑赛事配置、导入导出和本地保存。',
		repository: 'https://github.com/yundan125/OWCS-Predictor',
		category: '电竞 / 预测工具',
		status: '开发中',
		visibility: 'public',
		tags: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
	},
];

export const projects: CatalogItem[] = [
	{
		name: 'PowerSettingsManager',
		summary:
			'面向 Windows 10/11 的简体中文 WPF 桌面工具，用于检测和管理经典高级电源设置的可见性，并提供扫描快照、备份和安全恢复。',
		repository: 'https://github.com/yundan125/PowerSettingsManager',
		category: 'Windows 桌面工具',
		status: '开发中',
		visibility: 'public',
		tags: ['.NET 8', 'WPF', 'PowerCfg', 'Windows 注册表'],
	},
	{
		name: 'MobileHotspotController',
		summary:
			'Windows 11 移动热点与离线局域网控制器，可管理系统移动热点，并在需要时回退到 Wi-Fi Direct 仅局域网模式。',
		repository: 'https://github.com/yundan125/MobileHotspotController',
		category: 'Windows 桌面工具',
		status: '开发中',
		visibility: 'public',
		tags: ['.NET 8', 'WPF', 'WinRT', 'Wi-Fi Direct'],
	},
	{
		name: 'TDM Claim Toggle Patcher',
		summary:
			'用于 TwitchDropsMiner 源码的可审计补丁工具，增加可持久化的自动领取 Drops 开关，并提供兼容性检测、备份、恢复以及 GUI/CLI。',
		repository: 'https://github.com/yundan125/tdm-claim-toggle-patcher',
		category: '源码补丁工具',
		status: '开发中',
		visibility: 'public',
		tags: ['Python', 'AST', 'GUI / CLI', 'TwitchDropsMiner'],
	},
];
