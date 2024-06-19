export default defineI18nLocale(async (locale) => {
  return {
    welcomeTo: 'Bienvenue dans',
    welcomeBack: 'Bon retour',
    reviewMessage:
      'Vous avez <span class="font-bold text-primary">{number}</span> cartes à réviser aujourd\'hui !',
    invalidEmail: 'Email non valide',
    required: 'Requis',
    review: 'Réviser',
    profile: 'Profile',
    blitz: 'Blitz',
    seeCards: 'Voir mes cartes',
    signIn: 'Sign in',
    signOut: 'Sign out',
    signUp: 'Sign up',
    reference: 'Référence',
    box: 'Boîte',
    step: 'Étape',
    type: 'Type',
    addBox: 'Ajouter une boîte',
    boxTitle: 'Mes boîtes de révision',
    addCard: 'Ajouter une carte',
    cardTitle: 'Gérer mes cartes',
    edit: 'Éditer',
    month: '{0} mois',
    week: '1 semaine | {0} semaines',
    day: '1 jour | {0} jours',
  };
});
