// eslint 官方的一些关于js的配置
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import antfu from '@antfu/eslint-config';


export default antfu(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        // 需要匹配的文件类型
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        ignores: ['*.js', '*.jsx'],
        // 自定义规则配置
        rules: {
            'no-console': 'off',
        },
        // 语言选项
        languageOptions: {
            // 转换器
            parser: tseslint.parser,
            // 转换选项
            parserOptions: {
                // ts 项目的 tsconfig 文件位置
                project: [],
                // ts 配置根目录
                tsconfigRootDir: import.meta.dirname,
            }
        }
    }
);