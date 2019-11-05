import React from 'react'
import { Image, Item } from 'semantic-ui-react'

const ItemExampleItems = () => (
    <div style={{float:'left', margin:'1em', marginTop:'3em'}}>
        <Item.Group>
            <Item>
                <Item.Image size='small' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIWFhUXGBkXGBgYGBUXHRgYHSAaFxgaGRcZHiggHR4nGxoXITEhJykrLi4uGR8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABgUHAQMECAL/xABXEAABAgMEBgQGChAEBQQDAAABAgMABBEFEiExBgcTQVFhIjJxgRRCUmKRoQgVIzM1c4KSsbIXJDRDU1RVcnSis8HC0dLTJWOTlDZ1o8Pwg6Ti8RYmRP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwBQ0ddZtZtMlNrDc4gXZSZI98SKkMPHfvuk47uRWqTdlToqktTDKq0OR/cpCh3EGJrT7V9M2Y5tBVcveqh9IIumvRC/IUMKHI7juh00cnJfSGV8DnSET7KfcX8LzieJGFd15O/MUqaBnSPRxm3ZT2ys9ITOAUmGQQL6gMR+fShSrxhgccvjVjabVoyjliWhULSDsCcFpu43RXx0GpA4VGQMKdiz05o9aJDyFXT0XEit15vMLbJwJGYO41BpUxZ2m+h6ZwN2vZCwJlIS6LmAfA7MnNxrnkYCqWPCrAtQFY6isaZPME0JHaMuBGOUPms6xLimbfsw1xQ65TEZYOU4HqrHOvlGGO1LNZ0isxLgAbm2qjHNp4DptL3hJIGfEGkLepS31NOO2NPIumq7iHKYK++NUOYUCVDcelxgGLWHYaLZsxqdlBV9CA61TAlObjROdRQ085POIbSaV9ubBam0is1KpJVTMlAAeTTmEhYHIU5tOhcgbLm3LOJUZZ4qflFKNaK++sVO8AXwN4vHOsdFl2YLPtJxKR9qz9VpT4rcykErSBkNoiqgPMPCAX/Y9W9tZJcqo9KXVVI/y3CVD9a/6RDnrFsHw2zphgDplN9vL3xHTT6aXTyUYqmUlPaTSJIAuy01VKDkAhwjo8Oi6AOyhwrF9EwFNaOM+2Gi7rFKuMJcSE41vtHaoTTiRQd8N8srwux5R44lKZV/DymlIWsfqqHpji0DkfA7TtOT+9OlE2yMgErKg4B2G6nsSIndBZEMyzkoQLrD77YH+WtReQKcLjqR2QDPCHOS1NImF+VJOV+SsD98PkLNpy/+LSTlP/55tJPYqXI+lUAzQoa3JrZ2POK4thHz1pb/AIob4UNaEvtZNMvSu3mZZsjiNqlR9STAQs3Y5FnWRIFPXdlg6OAbSZh71oUO8RZMRL8rem2VeKy04aecsoSg/NS76Y7bQmdm0tYF4pSSEjNRAwT2k0EAr6JS21np+eO9wSrR8xkALI7XSodqDDjEdo9Zvg0u0zW8UJF5XlrOK1nmVEnviQJgK611W0tuURJy4vTE4vZJSM7njkdpKU/KJ3Qz6E6NIs+TblkUqkXlqHjuHrK/cOQEK2i8obQtR+014sS5MtKA4glODjo+VeAI4+aIa9NNI0SEm7MrxKRRCa9dw4JT6cTyBMBW+ua2nZuYZsaT6S1qCnqdxQknckCq1diedei2bKLDDFgWaoB50X5p3yGj11q5qJAA8kU3gxs0CsVUjLu2rOILs9N4obp0quGqG01xSpaiK+SAOBiVmnxY8o5MOjwi0ZteISCVOvHqNoAqrZtigoOHFQgF7TicEoyzYNkpO3dACynrBJxUVKHjqAJJ3JG7COa13WtHpISkp7paU0BeWBeUK9GoHAEkITvOMSsjKosOVcn50+EWlMnKoKlLVSjSPNBoVEDdQDBIiNkZNNmNrtq1yHZ96qmGVHFCjiEgGtCAQCadBOAgIqzrPasGXE9OgO2m8FbFpRvbKua1mufFVd9BvMc2r3QF603VWhaSlbAqvkqwU+Rj8lscd4wHES2hehD9rTBtS1a7NRq2yai+B1RQ9Vobh42eRxt20LKD4DSwBLppVsYBwDJKqZNig6HjZHDAgq+2mjvlyHob/lBDN4bIfhJX0tfzggJSalkOIUhxCVIUKKSoAgjgQYovTzVU9JueHWSVXUHabNJJcaIxq35ac8Dj+dXCxdA9PW50lh9OwnW8HGVVFSM1N1zHKpI5jGHSAqywJ+U0kkSzNJCZpodK7QKQrIOt+acKpOFcOBhe0MtOYsGd9r581lXlVad8QE4X0k5AmgUnxTjzLtpXoCS+LQs1QYnUYkZNv8UuAZE5V9O4iR2cvbEotiaZUhaTddaVg4w7SoKVcN4UKgjvEB1vWLsZozksKbWgmWxk6B1XQPwiccusCRnSFbWxoOuYCZ+S6M4xRXRzcSnEU88buIqOESWhr78itNmzirycpJ/c62PvStwcQMhvGWUPQgE7Re2GrXkG3xRLqFAmmbUwihqORrlvSog5wyT8kHmwleCgUrSR4jiSFJUOxQHbkcDCbaFne1k8Z9kUlJghM4gZNLNbswBuF4gK4Xiex+SYBC1xaKmekCpA93Y91RTxgB00d4xHNI5xO6BW6J2QYmK1UpFF/GJ6K/WIYYQtDpIWfaE1IpFGZj7clxTAHBDyBu6JCMOBEBM27KXJ2TmxxXLOY+I6LyDzo4hIHxhibZlglxax490ntAu19ASO6Mz0sHEFJ5EHgpJCkK7lAHujoEARyTEredac3ovjuUBX1pEdcEARDW3Llx6UTTopeU6rsQ24E/rqREzHwWwVBW8VA76V+iAyE79//n8zGHEA4HLA+jGPuCAKQvabzbiZcMMGj8yrYNHybwN9zsQ2Fq7hDAYiZaW2kyqYVjs0qZZ5AkF5XylJSnsb5wHTYllNysu3Lspo22kJSPpJ5k1J5kwiuS3tvaV5WMhILugbn5odY80oqB2jmYZ9Lpx24mWljSYmKpSr8C2PfXzySCAOKlIHMSVi2S1KsNy7KbrbaQlI38yTvJNSTxMBzzwQhSpuYUEtsJUUVyQKdNw+cQKDgMusYWpVtKVOWzaXudxB8HaVT7WZ403vOYE5kXgkQzTkoHlpLvvLRvhJyW4nELV5qCKjnjuERdoltR8NnVBErL9NlCvKH39wb1bkI3BVT0iAkFsthsrty2BcKBSVlya7FB6oKci8ok8aYcOjxaNaKP2rMi07VTRrAysqa0CK1SVjh1TTxt+FBE5ZdhO2jMJn7QQUNINZSUV4o3Ovje4cwnxcIfoD5wA4AdwAhGtB9+1iWZVamZCtHZkYKmOKJfzNxc34gVGbJaVneE9F7CX3t5bX4w/g/M378OjEZOvPznuMmrYS1KLmQAFKGVyVSf2pF3yanEBD/Yesf8Av/Wc/qgjs+xhJ/hJv/dPfzggICzp+zbfSk4ytoNiqVIUEvII3oWKbRAqcN1TlDTY1szEspMtaVLxolqbSKNvHIBzc06cOicFE9HhCSLFsy26zVnumUnkG8oDoqCuK2wcc+ujv4RK2Xpc/KkSVvNJAX0ETVApl7ks0oDTfQcwICzo5nJFBcDtKLAu3hgSnyVcRvocjiI+JCXDaaIWVN5pBN66OAVmU8K1p2UA7IDktOzm30Ft1NRUEbilQNUrSc0qSaEKGIIjbKpUEgLVeIwvUpe4EjceMboIDW60lSSlQBSQQQRUEHAgjhHJZEoWUbKpKEYNk4kI8VBO+7kDvFN9Y74IAiC0ps8qS1MIFXZZe1RxKaFDyPlNqWO27E7GDAfLSwQCMQRUHiDiI+4SNPNL3LKQ2pMmXZfJS0rpszWiUkUwG4HLdG3QzWTJWibjai29+CcoFH80g0V3Y8oByggggCCCCAIIIIAMa6BKeAA9AEJWn+nrlluNlyUU5LrFNqlYBC8apKSKA0oRjjjE1onpbK2i1tJZytKX0KoFoJ3KT+8VB4wHdZ0mby31++OUAHkNjqoHrUeajuAiRMAggNE1cCSV0ujE1yoMceUQoswzbqXplPuTZvMMKHjDJ51J8fyU+LnmcJ11oKpXGhrTdUZHujZAYAjMEYJgNE3KJcF1eKN6dyuSuI5ZHfC1p1p5K2Y37oQt4pq2wkgKVuBPkIwPSPA0qcI47f0ufeWuUshsPPglLj5psJc81YhSxh0RWnPKIuzdApKRCp+1XxMPg3lOvHoJVuCUHrHhWu6gEAlfZomvyen570EPP2YLH8tf+gr+UEBKaS6t5WZcEwyVSs0k3kvMUSb3npyV6jzpURxi1ZiXQqWtthD0uRdE22m+2pOX2w1iWzkb1LvoJiT0Z1hSk2oNKKpaYyLD42a68E1wV3Y8obCK5wCbZ9juyQC7NX4RKK6Xgqlg3QcayzxNB+Ys3TXNMM9mWi28m8gkEYKSoFK0HgtBxB+ndWONqwksqKpQ7GpqpqlWlHMnZ+Io+UimJqQqO4S4UQtSbrgwqDjTeK+MnkRwNKiA64IwBGYDCjQVMJLmtqxwSDOYg0PuMycRhmG6GHcwhaS6pbOm3NqUKZWTeWWSEhZzNUkEVPEUMBrndclkoSSh9bp8lDToJ71pSPXCa3r+O16UkNjXc4b93jldJ5YdsQmt2w5CzVyrUm2nbC845fo7VOF2+ldQam9hSLL1d2ZJT0k1Mu2VKtOEnJhoBV00C09Gt08Dw35wDstpuZYotN9p5GKVDNCxkQeRjyTJSYRaiGUkhKZxLYO8AOhIx40j2EkUjyfPJpb5B/H0/tRAesYIIIAgrEJpfpQxZ8uqYfOHVSkdZxZxCU+jPcIpJ7XdaK1lbUu0Ghmm6tdO1yo5bhAeh1CseftN12jYU4HZeacclniVIS6pTia5qbUFHdXBQIJFOEP8Aq41os2idi4gMzNKhN6qXKZlBONd90403mIb2SCftGXPCYp6UL/lAMDNqNWxYjrrjV0LbcvIJrdcbrik8lAEGKg1BV9tk409xcrzywMWPqnH/AOvL7Jn+KK51AfCyfiXP3QHpqCCCAIIIIAMRVpWYqYqhxZSz4yEGhcG8LWMQjzU0J3mlRErBAR6ZfYtpalmUJAFEpFEIQOdBXuA/nEU3oi2t0TE6ozTyerfFGmvimKkD85RUrnDJHFN2klBupSpxfkNip+UTRKPlEV3QHVshwHoEERfthNfiX/Xb/lBAcNoWfLTqdnPyVFZVWAodrb7ZqO2qTyEfErYc1K/ckyXWhkxNEqoODcwkFaflBY7M4aYIDglLRvYONraXldXShPmrSSlXpryGUd8YIjMAQQQQAYVtP9NWbMYLjnSdUCGmq4rVxPBIqKn6TEzaLUyVDYOsoTTpX2luKrxSQ6gDDcQYg5HQGVS+ZqYvzUwSDtHylV2mQbbACUgbhTvgKh0V1dzlsPLnrQWppt2qr1KLcNAEXEEUCAKYnckAZ1jE7pnbFiP+BvOIebQE7O+gUU1kChaaKGApiTQj0+ioXdNNDpa0mg1MBQKTVC0UC0HfQkEUORBHroYCQ0ctdM3KszKBQOoC6eST1k9xqO6PPj9jqd0oLQGU2HD+amjv0D1xeU9Ny9kSCCUubBhKGxdF9VMryssziTxMQGr12QmpyctCXeDjzykpCSClbTSUIT1Tj0lJJqMKXRuMBYcEEEBRnsh13pmQacXdZN4k8KqSlSu5MXJZtlMMMpZZaSltICQkAUI58e0wt60dCRacqEJUEvNm+0o5E0oUK5HDHcQDxBqNjSPSKQQJUsu0SLqbzO1KQKAXVpqCNwxMAaz5JEjbbK5BFHSW3tkmtNqV4JAGQXw584itYWsGatFpLL0sllDTtTQLqHAFJuqKsjS9hnhyht1Z6vJx6dFo2klabqw6kOUvuu5hRGaUpNDjTdTCGP2RLJNmNkDqzKFK7Ch1NfSQO+A3apk10epxTM/WXFZ6gPhZPxLn7otTVdLFGj6AfGbfX3KKyPVSKr1AfCyfiXP3QHpqCCCAIIIIAgj5UoAVJoBmThClaen8ulRblUOzrwNCiXSVpSeC3eoOypPKAb4XdI9MJGQT9sPJQcw2npLPYgY95hSmZDSC0KhxxqzWT4rato7TmtJ5nEFNMMI4W9W9jSBC559T7pNQlxRJUczdYaF9Z49aA3fZ5s78Xm/mM/3YI+9rYP5Kc/2D/wDRBAP0lMTYwfZaV57Kzj2tuAEdylRKgwvM27NJoH7OeFfGZcYeSOZqpKvQkxKMWo2ry0nz0LR61CkB3QRgGMwBBBBAEEEEBU+vCzp9KUz0pNPoQ0AHGm3FoCRUkOgJIrmAa8BzjVqp1o7dt1u0Xm0KaSFB5akthaT0aKBoL1eGdcsMbJ0oldrJzLdK32XABxN009cedNS2jErPzLzc22XEpavJAUtFFXgK1QR64C3RrDsq0VuWffUoPJU0CpJSlwkEUSrceBwxpTGKd1Qy9LbZSlSgEKcyPWCQrA0zBwi87C1ZWZKOB1qXq4nFK1rWu6cwQCboI3GlYqjUzZSlW2+sDoMbYk7qlVxI7TVR+SYD0RBBBAEYpGYIAhM1uyG3st9vx1FoNjCqnCtIQkV3qJCe+HOOealUru3hW4oLA84A09Fa9oEBGS9liXs/wZOTcuW68SEUJpzMUR7HqXJtNS/IYXXvKRHo91FQRxBHpwilvY+2WUzFoPFJASoMgnjeWpY7RRHpgLsggggCNbwUR0SAeJBPqBFfTGyCAh5nR1p41mSt8eQ4fc+9lNEK+UDElLSqG0hDaEoSBQJSAkADIADAQPldOhdrxVU+oZ+mIebsV973yedSmmKGEttD55CnPQoQHfa9pS7KCZh9DKcqrcDePAGoNeyK+ntadlSxKZNkvrONGGgkE8SsgV7QCYY2NXNmpVtFy22XShU+t18nucUR6o7C4lgXZWzlqIGFxLLKRyKlqB9AMBXn2a5n8ivf6q/7EEPvt3aH5L/9y1/TBAM8EVtKa55FYqWZpPa1X6pMSbWtGz1YVmBXjLv/ANMA7QQuy+m0kvquL7Cy/wD0RJy1sMuYpX6UqT9YCA74IwDGYAggggMKTXDjHnPV1ola8vMzS5MIbUzeZJfSoId6Q6uHABQOWI4x6NjFICi7Wl9LXwUFJSMQS05Kt1GXWCwR6jEvqY0QtSRfeVNJDbLicUlaHFLcqClYuE0wKwanflvi3oIAggggCCCCAIIIIDCjhC5oDY/g0sSU3VvuOTCwaVBcUVAGm8JujuhkjAgMwQQQBBBBAEEa3iqnRArzJH0RDzjdoGuyclUjcVNvE+gLAgJlZNDQVPCtPXERNuz5waal04YKcccVQ/mJQK/OEQsxZdtKFBaEqjmmWV/EsxDTehtuOCircoPMZDfrRQwDBctv8LZ3+jM/3oITfsY2x+X3/wDUmf7kEA/s6SShA2YWoHeiXeUPSEUiUl59KxUJcpzbWn6QI7KxzO2g0nrOoHapI/fAdAjMaWJlCxVCgocsY3QBBBBWAIIDCI/rWs9ubXKPF1laFlBU42QmtaA1GIScwoilCDljAPcEfDTgUApJBBFQQagg5EHfH3AEEEEAQQRCaXaTsWeyH5gOFBUE9BBVQnjuA5nlATDrgSCpRAAFSTgABiSTwjjs62pd8kMvtOEZhC0qPbQGsRujulsjaKCJd5LmFFNqF1QBwN5CsSOeIik9bWgpsx1E7JKU20tdKJJBZcNT0CMbpFacMsoD0bBFealdK5iflHDM0UppYbDgwKxdB6QyqK5jOsWHAEEEEAQRreeSgVWoJHEkAekwhaSa3rOlVXErVMLGYZAIHHpmiSeQJgHW0rUZYSFPuoaSTQFagmp4CucbJOcbdSFtOJWk5KSoKHpEJ1oWbI6QyKHBep0tm5Si2l4BQocxVIqMiAMcjFCTBnrCn1tocKHE0xFbjzeaSU5FJxwzBqMxAetIIi9F7V8KlGJm7dLraVlPAkYj0xIvEgdEVPCtPXAaplhSq0dWjmkNmnz0GIx+yJg9W0X05/e5Q9mbMZmrbW315KZI4thpyvchy96RENMazbPa9/U+xu91lplP0IMB2+0E7+V5j/Qkf7MERn2XbG/Hf+jM/wBuCA3SeraUTQvOzUyreX5h1Ve0AgRP2bo7KMYsSrLZOaktoCj2qpU95iUggMUjMEEBw2268iXdXLoDjyUKLaDgFLAqlPeYqLRvXiS8GbQlw0LxSXEXgWzWlFtqFaA5mtRTKLrjzVr/ALGSzaIdQABMNhZp5aego03VAT31gPSDj6QKlQAORJAB74pb2RtjN7OXnEgBZWWVkAdNJSVoJPK6ofK5QvnQO3LSaYU86hTQbTsr7iQkJp0eghOdN5FecS+sLRuYlLAaZmng843MJUCkqIQkhSQkKUASACcxvgGf2Pj7qrOUHFlSEuqS2DjcTQEjsqSac4tCK21BSxRZKVEe+OuKHMAhH0pVFkwGDBWAx5y050ktazLTepMuBCllxsK6ba2ziAEqww6pAoR64D0dHPPyaHm1NOoC21gpUlQqCDuiC1f6WotOUTMJSUKCi24jclwAKNDvFFJIPOGWA8iaXyCrLtN5qXcUksrBbWCQoBSUuJFeQUAeNIu32QI/woVz27f0Kio9dvw1N/8Ao/sWoadbesuTn5TwaWDpIcSu+pKUpoK4Cqr1ceEAy+xu+4Zj9I/gRFuRUfsbvuGY/SP4ERbkAQkayNC3p9KFy045Lutg0SFrDa9+ISRdV5wrhhTKjvHNaM82w2p15YQ2gEqUo0AEB5z0o1bzUrJOzU/PAEEBLVVu7RZOAvKIx35HI8ImdUOjNkWg2oOS7nhDQG0CnFlCgclJpSlaHDdzjl0hdntJJoJlGyiSaNELcqlHBS1HergkVIHfHXpHoBaNksl2zJt1bVAp5KeisKGBWEjrJpuzHPOAuyxbIYlWgzLthtsVISOJxJxxrHnr2Qp/xRP6O39ZyLR1J6TzM9JrMyStTTlwOEAXxQHGmahWhPZFYeyJH+KI5yzf13RAXPq5eCbJkiQojYI6qSo5cBie4RNsW3LrVcS+3f3oKgFjtbNFDvERGrP4KkviEfRE1admMPpuvsodTwWgL9REB2V3xxT8xdzYW4nfdCFfqk1MKbmhsuVFMlPTMo5ncQ+tQA+JdJomvCgiLmZbSSVqW35afQNy2w056E3R+sqAY/DZT8nPf7JX9MEKn/5fpD+Rk/O/+UZgLFZEwrrltscEVcV89QCR80x3IFBnXtiJtXSCXk0XpyZabPM3SeSUVKleuIOW0smp0/4fJqS1+MzV5pG7Ftql9zt6IqIBzUoDEmgEa2ZhK+qajiMu45GIiT0frRc28qZXnRQuNJPFLAN3DcVXlDjE2BAZin/ZIWcVSsu+BXZulCqDILSSCeAqmnaoRcERWlFgtT0s5LPVuOAYilUkGqVCu8ECAqXRbXDJylny7Cm3nHWmwhQASBUecTCnrA1pu2myZdMsltq9fJqpa+ieiaigSMccD2w662tEDLSUu5JNNFuVF1y8wy6spNAFqUtBJANSRl0q7o69S+nKp0rlXmGkqbQFpW2hKAU1AopAFAcRiMOUA1apJgrsmVq0WihBbKSCK3SRfFfK63aTDjHyBGawGYSdbmjKJ2z3SaBxgF1tXApBKkk8CmvqO6HaI3SOzzMSr7CVXVONrQFcCoUBgK71IWnLS9kX3XW2vdnSsrUlOPRxxOPRuRJ2vrkstmoQ6t9Qrg2hVK/nroD2isVbo3qXn31ETBEqhKiKqF8q5oQkgEZYkiLLsTUrZrNC6HJhW8rVdHzUUw7SYCh9PrfTPz702hBQly5RKiCRdQhvEjmmvfFoa6tBZKVlVzbDRQ6t5INFG6Aq8VXUZCpEQutXQ9tq1pRmXZShqYDaAhsUxC7qzh5pBrFh6/mybJUR4rzRPZin6SICM9jd9wzH6R/AiLcio/Y3fcMx+kfwIi3IBW0201Ys1KDMNvFLl4BTaagEUwKq4E1w7DwiqbR1l2W4oF2Vm5oINUh90KQDx2dbpPMivpi9p+QafbU082lxtWCkLAUD2gwlDU/ZO02mwVStbm0Xc9FcuUAiu6+ikXGLPQlIwSC5Sg/NSig9MbGNZGkEwLzFnIunqkMPHDMYqXQ4b6R16+bGlZWzmEy8uy1WZTW4hKSQG3cyBU5jPlE/qGnH3LL91USEOrQyVVJ2YCcMc0hRUBwpTdARuiT2kq5lnwhptqWvAuBSWEi5WqgEoN+9StMM6VhJ9kT8Jt/ozf13YnNJNJ9JZZ5TRaKxXoLaly4lYrgQU1x804xXGni7QVMJVad7blpJSFBAIbqu70UYDG9gceMB6c1ftBNmyYGQYb+iGGILQT4OlPiG/qiJ2A5Z+z2nk3Hm0OJzotIVQ8RXI84hJnRl1FVSc6+wcegsiYaJ/NdqsdiVACmUMsYUKin0QCj4DbX45J/7Z3+7GYYvAlfhnP1P6YxAJ1g6upKUUH5lRmpon318lVVZ9BupFd4zIG+Hts4ZU5ZeqFyVnWG3S0xfmpmlHFVvlIz91e6jY33BQ44Jhglkrp0yKncnIchXE9vqEBuhE1mabTNmBtxuTDzKsFuFSgEKrQJIANAcKE9kPcfLiAQQoAgihBxBHAiAoxr2QCqdKRTXk6aetMfR1+rVg3IAqJAA2hNe4JrFiTGrWylu7UyTd7gLwSe1AN0+iGSQs5plN1lpDY4ISlP0CAp9zWlabyShNirUlQunovqBBwNehlCjodIW3Z7jjsrZ6quJudNskJFb3R6Q4b6x6ZggPMtvWjpItd90TicTQNNqSkdzQpvzOfExZupW1bTeQ8LQDhQgpDa3UFCycbyakAqAwxO858LNggCCCCAKQQQQEHadgpenZeYWARLpWUcdougB7AkK71coiNcMmXbHmwM0pS53IWlZ/VBhzjht2XS5LPtqpdU0tJrlQpINeUBWvscmSLPeURgqYNOwIQPpr6ItiErU7Zfg9lS4ObgL3cs3k/q0PfDrAEEEEBUWvWTenHJKRlklbqlLcKRkEgBN9Z3AVOJ4xYOhej6ZCTZlUm9cHSV5SybyzjuvE91IlEyaA4p0ITtFJCSugqUpqUprwBJw5mOiAI88eyPbpOsKpmxSvGij/P1x6CmCoCqaEjccK8q7u2KY102WZ+YkES9dqtbjCknAtnoqJWnMUFTXIjEVqIC0NCUFNnygP4Bv6oibSquXZGmUl0ttobT1UJCB2JFB6hGidkCrpNrLbm5QoQaZBaDgpPLA8CM4Duj5WoAVJoIXDpN4OsNT6AySbqHxUsOHcL+bSvNXTHAFWBLIFAioNQd8Bz+2DX4Vv56f5wRt2aeA9EEBos2zWpdsNMNpbQMkpAAqcyeJJxJOJjqBiEk7WXNH7WBSxiNuodf4hJ6w889HgFRMtJoKD14+kmA+40zMwlCCtaglCRVSlEAAcSTHFb9uMyjRdfXdTWiQBVS1HJCE5qUdwERdlyL8ytMzOpuJBvMytahvg48R13eWKUUFMRegJqTfU506FCD1QoUUoeUoHFP5ufGmQ7KxG2palxSWWwFvuAlCOCRQFxZ3IFRU5k4CpMdkoxcTioqUcVKO89m4cBugN8YrEQbZTs1Pk+41CW6Yl5RN0FPEKUQlPHPKkfD00uqGK+7ugrXdxDTQoFEHjiEpJzVU0oCAE0DGY+W0gAAZDAR9QBBBBAEEc09M3Ak71LQgfKUAfVU90b0qzHCA+o1zDIWlSFZKBSew4GNkEB8NNhICUigAAAG4DACPuMEwIVUVgMwQRhUBmCOeTmgsHcpJKVDelQofWCCOIIMdEBgxB27YG1WmYZUGpptJS24UhQoc0OJ8ZB7QRupE7GKQC9o/pOl5xUu+jYTiBVbCjW8PwjSvvjZ4jLI0MMIMQGlmi7U6gVUpt5s3mX0YLaVxBGYORSYWtH9OXZd8WfbADcxk1MDBqYGQVXC6o9wr5OUA62utq4pMwhKmVCiysBSAP8wHAJ5nDjSEmbsCes6rtkr28tmZJxRUAN/g7hNUjLo9udaCxaQrWhZczKkvWfRaM1yazRCuJYWfel+b1DwBNYBQ+y5NfkKa9Ln9mCJr7Irv5HtD5if6ozAPiRQUGUK2nGm7FnpSihdmXMGWEYqWo4Jr5IqRjmdwML+sDWYGHPArPT4ROLN3o9JLauFB1l+bkMzlSM6FaIiSWJmdX4TacxVQqbxRleuk5AVAUvIVAGYBCS0S0YfW6LQtQhc2R7m0Pe5VJ8VAqemd6qnhU5mU0p0nEupEuwkPTj3vTNaCm9xw+KgYknfTCI3T3TkSQRLsI2889QNspxpXx1gYgcBv5CpG/QLRNUolT805tp17pPOqxp/loO5A5Z8hQAJXRuxPB0qW4vazDpCn3TheUK0SkeK2mpCU7gTvJMRNo2iJ19yVbVSVY+7Hq0CjSvg6VdmK1bh0cyacGm+k7i3k2VZ6qzToo64MRKtYXlmmS7pqMiKjeRC+623MOJsSRUUScuL8++DS/vU2XOKlVvGu47kmAnE6QtrQq1XgpMmx0JFq6Qp5R9z2oRStVFRbQCBRN5RwNYY9ELOcQ2qYmR9tTNHHRnsxT3NlJ8ltJp2lR3kwm6OqFrz4eQKWdZ5uS6AOi68BS+RTJIIoN3R4kF90mtlMpLreIvKHRbRWhcdV0W0DmpRAgOpuavOqQnEIAvngo4pT83E9qY64i9HpFTLCUuKvOqq46rynFdJZGeAJoBuASN0SkARgmMxwWxM3EJAzW42gY8VCv6oUe4wEdpBMkTVntDx33FK7EMPEH5xRHbZMzfdmh5DqUf8ATbV/FC5OzO0t+XZ/AyTrtfOcWlunbdTXvjs0CmC54cs756YT3IIaT6kCAaowDGYjJCY+2Zho7tk4Oxabn0tH0wEkYirEmal9k9Zh0p34oWA63TsSsJ7UGJN50JBUcAMSeA3mFWfmPB7WYJwRNsqZPxrR2jf6qnR6OEA2wQQQC5pLMGUWmdGLOCJocG/FeAGJKFHHzVK8kQwoWCAQQQcQRvHGPl9lK0qQsBSVApUDiCDgQe6EXQy0TJzS7ImFk3QXJNavvjGJ2dTmpFFDmAeEA+kxmOedYK00Sq6sYoVnRW6o3jiN4rHLYtqh5KgRcdbVcdbrUoVmO1KhRSVbwRASUQel+i0vaLBYmE1zKFil5tXlJP7sjE2Y5ZadClKbODiaFSeRrRQ4pNDjyIzEBTllaUTlgviStIKekz7y+ASQnkcyBvQcRuwpW5bOtBp9tLrLiXG1iqVJNQR/5ujk0isBieYUxMthaDiOKFYgKQfFUKnHmRvih3xaGjM10SXpNw4VqEL5HPZujiMxxGQejIIqD7Pkp+KzHpb/AKoIDXoxYjVjlDaUJm7ZmBUJrgyk4kqV4rYxJVmqlBHXpfpcmyEKbSvwq1JgC+ulQg+KLvioF7oNjPEnEkmBtzSFuw2nGmliYtaY6cw8rpBonGndjdT2E4UBlNT+r9QV7Zz4Kn3DtGkrxKb3SLq6+Oa1HDPPIJvVfoMuXJn54lyeeqSVGpaSrdwvkAVO4dEYVr060NPU2e2GWOnOOijSAL1wE0C1DtwSN57DEjrE02asyXvqop5dQy35SvKVwQN57t8UzYc0ZZC7ctAlyaeKhJtq8ddKF5QGSEjBOWWGaTASs2+uyZcSrRLlsWiUl5YNS1fPRQD5ZKiKjfU1wTHzbDa5VlqwJBQVOTCgZx0HeoVKCrMAJpXfdHFRiLsScMky5bU2b87M3xJpXianBx8jyQCAOWG8Q86i9FlJQu05mqn5i9cKs9mTVS+1ZGfACmBxCxtGrEbkpZuWZHRbTSu9RzUo8yamE5ibFqWwQOlK2aa+a5NmoBHG5RVDuIrvEdmtzS7wCTIbV9sP1baGZG5awOQOHMiIKXbVZFjMSyMJ6dUEJGBVt3qBRwz2aSBXKoHGAf7FnPCFuup97Sostnyrhuuq/wBQKT/6cd9pTgZaW6rJCSqnHgO80HfGuxLNTLS7TCOq2hKBzoKV7ScYXdMJsOTUjIDHau7d0cGmPdRXhV1KB3QDVKhQQkKNVUFTxNMfXC1pA+F2jZ8vj0S9Mn5CC0n1umGkxXNhTRmNIp5yo2crLIlx2qKXFHHI3krHdAa9GZoO6QWm6cmGW2u4Yn1gx3amHb8gtzy5mYV6Vkwjaq7RvNW3aBFLwWvHcCHHKd1Yc9Qw/wAIa+Md+sYCwVrApXeQO8wpom7turap75INqHa286D6nBErpPOBpDKicDMMI+csJHrIhR0tmNjpBZS60Drb7J54G6PnqSYCwZ1kLbWg5KSpPpBEVpp/MuP2MxPNH3eVcbfwx6bZLLyTyCr1RvuxaEV3o8yl324stXiuuKSDXBEwnaJ/WJPfAPVkz6Jhlt9s9BxCVp7FCsdRirfY/W2XZJcq4fdJZwgA1qG1YiteCr45Cgi04DlYmquLbPWTQ9qVVun0hQ+TzhR1q6OuTEsJiW6M3KnasqGBoKFaR2gVocCQBviR01fVLBufQK+DmjwGapZdA5QcUkIWPzCN8MbTyVpCkkFKgCCMQQcQQYBc1e6WItKUQ8KBwUS8jyXBnh5JzHKNOmci82pNoSaavspo63+MS4qVNnzknpJO41G+K20hK9H7YEy2CZKbJLidwxq4BTekqvJHAkReElNIdbS42oKQtIUlQxBScQRAcWj1uMzrCJiXVebWO9J3pUNyhvEa9IbILyUrZXsphupZczod6Fjxm1UAUnsIoQCK50iLlgz/AIYykqs+aV9sNgYNOmvSSBlXMcekPJi1LOnW3m0OtLC21pCkqGRBxH/1AQuiulCZouMOJ2M2waPMk5ZUWg+M2QQQeYiVtmyWZplbEw2FtrFFJPqIOYIOIIxELOsLRJcwETcmrZT7GLSxQX041aXXChxpXjwJjRq+09btFKmH07KcQCl1k1TepgpSAcc8xmPQYCK+wfZvlP8Azx/TBD/7W/573zx/KCA8pWh8LL/TP+4I9brzR3/QYIIDzr7If4TR+jo+suOLXJ17P/5ez9ZcEEB8a2erZn/L2fqiPR+jX3JL/Et/VEEEBTeuz4Zs7sa/bGGrWB8N2L+c99CYIICzIQHf+Jkf8sP7ZUEEA/xUOgH3fpB2j/vxmCAVdV3wHbPxav2a4sXUP8DtfGO/XMYggJnWN9zsfpsn+2RCxrO+GLE+Nc+lqCCAtCKz0a/4mtT4hj6jEEEBA6kvhS1PzlftVxdcEEBEaXfcU18S59Uxwat/gqS+Ib+iMwQCV7I37gY/SB+zchk1M/A0p2OftXIzBAaNd3wLNdrP7VuOfUN8ENfGO/WMEEBYKf3/AL488zn/ABaP0gfUgggPRMEEEB//2Q==' />

                <Item.Content>
                    <Item.Header as='a'>Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image size='small' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBCkqh59jDnoLXXfN59g2JemU-SAuJjGtC0_UGf04wUOGkEhHf' />

                <Item.Content>
                    <Item.Header as='a'>Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    </div>
)

export default ItemExampleItems