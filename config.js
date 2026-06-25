const CONFIG = {
        API_BASE_URL: typeof process !== 'undefined' ? (process.env.API_BASE_URL || 'http://localhost:3000/api') : 'http://localhost:3000/api',
            CLAUDE_ENDPOINT: '/claude/recommendations',
                CLAUDE_CHAT_ENDPOINT: '/claude/chat',
                    ZG_CHAIN_RPC: 'http://localhost:8545',
                        ENV: 'development',
                            FEATURES: {
                                    MOCK_MODE: true,
                                            AI_ADVISOR: true,
                                                    WALLET_CONNECT: true,
                                                            ZG_INTEGRATION: false
                                                                }
                                                                };
}