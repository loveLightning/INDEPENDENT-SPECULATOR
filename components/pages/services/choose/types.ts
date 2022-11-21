import cookBlack from '../../../../public/cook-black.svg'
import newsPaper from '../../../../public/newspaper.svg'
import like from '../../../../public/like.svg'

interface Props {
    id: number
    plus: string[]
    title: string
    subtitle: string
    desc: string
    price: string[]
    btn: string
    link: string
    image: string
}

export const data: Props[] = [
    {
        id: 0,
        plus: ['Free digest with fresh investment-related news and ideas on a daily basis.', 'Free reports on investment ideas for speculators.', 'Honest, unbiased trend analysis', 'Heads up on events, appearances, and other educational opportunities.', '"In The Pit" company grillings'],
        title: "Speculator's Digest",
        subtitle: "EDUCATION",
        desc: "A free online educational service for investors who want to become top performing speculators.",
        price: ["Free"],
        btn: "View more details",
        link: '/services/digest',
        image: newsPaper
    },
    {
        id: 1,
        plus: ['Requests for coverage', 'Searchable Database', 'Books and More', 'Free Access to Blog', 'Clients-Only Meetings'],
        title: "My Take",
        subtitle: "GUIDANCE",
        desc: "Our no frills, high-impact introductory level newsletter provides action-enabling guidance on investments that interest our readers.",
        price: ["$500 / year", "$50 / month"],
        btn: "View more details",
        link: '/',
        image: like
    },
    {
        id: 2,
        plus: ['Email Alerts', 'Company News and Analysis', 'The Go To List', 'Buy If You Dare List', 'My Take Included', "Field Trip Invitations", "Priority Support"],
        title: "The Independent Speculator",
        subtitle: "RESEARCH",
        desc: "Subscription to The Independent Speculator newsletter, our flagship monthly service that provides actionable investment ideas, 24/7 market monitoring, and more.",
        price: ["$3,000 / year", "$1000 / quarter"],
        btn: "View more details",
        link: '/',
        image: cookBlack
    },
]