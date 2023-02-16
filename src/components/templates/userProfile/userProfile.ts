import settingsPageTemplates from './settingsPage';

const userProfileTemplates = `
    <section class="profile">
            <div class="container display-flex">
                <ul class="profile__user">

                </ul>
                <div class="profile__content">
                    ${settingsPageTemplates}
                </div>
                <div class="profile__activity">
                    
                </div>
            </div>
        </section>`;

export default userProfileTemplates;
