import React from 'react'
import Link from 'next/link'

export default () => (
    <ul>

        <li>
            <Link href='/posts2' as='/posts2'>
                <a>posts2</a>
            </Link>
        </li>
        <li>
            <Link href={{ pathname: '/posts', query: { id: '2' } }} as='/posts/2'>
                <a>post #2</a>
            </Link>
        </li>
    </ul>
)
