const navItems = [
  { label: '성분관리', subItems: [
    { label: '성분조회', link: '/ingredients' },
    { label: '성분입력', link: '/ingredient-input' },
    { label: '구매성분입력', link: '/purchased-ingredient-input' }
  ] },
  { label: '제품관리', subItems: [
    { label: '제품조회', link: '/products' },
    { label: '제품등록', link: '/product-registration' }
  ] },
  { label: '자료관리', subItems: [
    { label: '자료조회', link: '/data-search' },
    { label: '자료등록', link: '/data-registration' }
  ] },
  { label: '내부감사', subItems: [
    { label: '아모레퍼시픽', link: '/amore' },
    { label: 'GIVAUDAN', link: '/givaudan' }
  ] }
];

export default navItems;