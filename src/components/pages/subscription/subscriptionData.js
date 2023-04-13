export const SubscriptionData = [
    {
        section: 1,
        items: [
            {
                label: 'first name',
                type: 'text',
                value: 'firstname'
            },
            {
                label: 'last name',
                type: 'text',
                value: 'lastname'
            },
            {
                label: 'email address',
                type: 'email',
            },
            {
                label: 'phone number',
                type: 'telephone',
                value: 'tel'
            }
        ]
    },
    {
        section: 2,
        items: [
            {
                label: 'password',
                type: 'password',
                value: 'password'
            },
            {
                label: 'confirm password',
                type: 'password',
                value: 'cpassword'
            },
            {
                label: 'age',
                type: 'number',
                value: 'age'
            },
            {
                label: 'monthly income (in thousands of naira)',
                type: 'number',
                value: 'income'
            }
        ]
    },
    {
        section: 3,
        items: [
            {
                label: 'sex',
                type: 'sex',
                options: ['male', 'female'],
                value: 'sex'
            },
            {
                label: 'how did you hear about us?',
                type: 'media-advert',
                options: ['twitter', 'facebook', 'instagram', 'linkedin'],
                value: 'media',
            },
            {
                label: 'what do you want to do?',
                type: 'purpose',
                options: ['rent an apartment', 'buy an apartment', 'invest in properties', 'buy landed properties'],
                value: 'purpose'
            },
        ]
    },
    {
        section:4,
        items: [
            {
                label: 'Are you sure all given information is accurate and you dont have any corrections to make? if Yes then feel free to Submit',
                type: 'information'
            }
        ]
    }
]