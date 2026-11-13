// 페이지에 표시되는 내용은 모두 이 파일에서 관리합니다.
// 컴포넌트는 여기 값을 읽어서 그리기만 합니다.

export type Project = {
  name: string
  description: string
  tech: string[]
  /** 저장소나 데모 주소. 없으면 링크 없이 표시됩니다. */
  url?: string
}

export type SkillGroup = {
  category: string
  items: string[]
}

export type Profile = {
  name: string
  tagline: string
  about: string[]
  skills: SkillGroup[]
  projects: Project[]
  contact: {
    github: string
    email: string
  }
}

export const profile: Profile = {
  // TODO: 실제 이름으로 바꾸기
  name: 'Ucogito',
  // TODO: 한 줄 소개 다듬기
  tagline: '사용자의 주관적인 경험의 구조를 바꾸어주는 심리학자',

  // TODO: 자기소개 글 작성하기 (문단마다 배열 항목 하나)
  about: [
    '안녕하세요. 자기 성장을 돕는 일을 좋아합니다.',
    '교류분석, NLP, 에니어그램',
  ],

  // TODO: 실제로 다룰 수 있는 기술로 정리하기
  skills: [
    { category: 'Tool', items: ['R/Rstudio', 'SPSS', 'AMOS', 'NVivo'] },
    { category: 'Pychological Tool', items: ['NTA', 'NLP', 'Nenneagram'] },
    { category: '도구', items: ['Git', 'GitHub'] },
  ],

  // TODO: 실제 프로젝트로 교체하기
  projects: [
    {
      name: 'my-profile',
      description: 'React와 TypeScript로 만든 한 페이지짜리 자기소개 사이트입니다.',
      tech: ['React', 'TypeScript', 'Vite'],
      url: 'https://github.com/nlpwhiz/my-profile', // TODO: 저장소 주소 확인
    },
    {
      name: '프로젝트 이름',
      description: '프로젝트에 대한 짧은 설명을 적어 주세요.',
      tech: ['기술 1', '기술 2'],
    },
  ],

  contact: {
    github: 'https://github.com/metahomo', // TODO: GitHub 주소 확인
    email: 'nlpwhiz@gmail.com', // TODO: 공개할 이메일 주소로 바꾸기
  },
}
