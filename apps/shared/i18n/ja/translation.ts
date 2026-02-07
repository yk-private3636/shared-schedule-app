import { scheduler } from "timers/promises";

export const jaTranslation = {
  appTitle: 'TimeConnect',
  welcomeTo: '%{place}へようこそ',
  auth: {
    login: 'ログイン',
    logout: 'ログアウト',
    settings: '設定',
    safeLoginPrompt: '安全にログインして始めましょう',
    availableLoginMethods: '利用可能なログイン方法',
    auth0SecureLogin: 'Auth0による安全な認証',
    agreement: {
      prefix: 'ログインすることで、',
      terms: '利用規約',
      and: 'および',
      privacy: 'プライバシーポリシー',
      suffix: 'に同意したものとみなされます',
    },
    settingUpAccount: 'アカウントを設定中...',
    authenticationCompleted: '認証が完了しました。',
    pleaseWait: '少々お待ちください。',
    retry: '再試行',
    backToLogin: 'ログインページへ戻る',
  },
  error: {
    general: {
      somethingWentWrong: '問題が発生しました。',
      pleaseRetry: '再度お試しください。',
      unexpectedError: '予期しないエラーが発生しました。',
      operationFailed: '操作に失敗しました。',
      tryAgainLater: '時間をおいて再度お試しください。',
    },
  },
  schedule: {
    addScheduleGroup: 'スケジュールグループを追加',
    settings: 'スケジュール設定',
  },
  category: {
    settings: {
      title: 'カテゴリー設定',
      description: '表示するカテゴリーを選択してください',
    },
  },
  common: {
    cancel: 'キャンセル',
    save: '保存する',
  }
};
