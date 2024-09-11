# cant-back

`Kent beck`의 저서를 읽고, 읽으며 느낀 점을 기록하며 공유하는 레포지토리에요.

## 읽은 책

- 켄트 벡의 Tidy First? - 더 나은 소프트웨어 설계를 위한 32가지 코드 정리법 (2024)

## 작성방법

다음과 같은 디렉토리 구조로 작성합니다.

```
.
├── pages
│   ├── _app.tsx
│   ├── _meta.json
│   ├── index.mdx
│   └── posts
│       ├── {{ 책 }}
│       │   └── {{ 파트 }}
│       │       ├── {{ 챕터 A }}
│       │       │   ├── _meta.json
│       │       │   ├── {{ ID1 }}.mdx
│       │       │   ├── {{ ID2 }}.mdx
│       │       │   └── {{ ID... }}.mdx
│       │       ├── {{ 챕터 B }}
│       │       │   ├── _meta.json
│       │       │   ├── {{ ID1 }}.mdx
│       │       │   ├── {{ ID2 }}.mdx
│       │       │   └── {{ ID... }}.mdx
│       │       ├── {{ 챕터 C }}
│       │       │   ├── _meta.json
│       │       │   ├── {{ ID1 }}.mdx
│       │       │   ├── {{ ID2 }}.mdx
│       │       │   └── {{ ID... }}.mdx
│       │       └─── {{ 챕터 ... }}
│       └── {{ 책 인덱스 페이지 }}.mdx
└── ...
```

## 실행방법

```bash
# 만약 pnpm이 존재하지 않았다면
corepack enable
corepack prepare pnpm@9 --activate

# pnpm
pnpm i
pnpm dev
```
