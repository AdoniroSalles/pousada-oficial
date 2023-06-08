import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://estilodecampos.com.br/',
            lastModified: new Date(),
        },
        {
            url: 'https://estilodecampos.com.br/#chales',
            lastModified: new Date(),
        },
        {
            url: 'https://estilodecampos.com.br/#galeria',
            lastModified: new Date(),
        },
        {
            url: 'https://estilodecampos.com.br/#localizacao',
            lastModified: new Date(),
        },
        {
            url: 'https://estilodecampos.com.br/#contato',
            lastModified: new Date(),
        },
    ]
}