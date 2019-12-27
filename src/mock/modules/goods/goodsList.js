import { mockRequest, Random } from '@/mock/mockRequest';
import { API_GOODS_LIST } from '@/config/apiTypes';

function generateList(len = 1) {
    let colors = "['#e70012','#231816','#284096','#ec6c00','#004098','#01b0ff','#5aa700','#fe3c00','#5375a5','#00873f','#0078d7','#0e3383','#3673b2']";
    let data = mockRequest({
        [`items|${len}`]: [
            {
                id: '@id',
                product_id: '@id',
                category_id: '@id',
                title: '@ctitle(30)',
                details: '@cword(30, 35)',
                rate: '@integer(1, 5)',
                price: '@float(100, 10000, 0, 2)',
                stock: '@integer(10, 1000)',
                sales: '@integer(10, 1000)',
                status: "@pick(['下架', '上架'])",
                audit_status: "@pick(['未审核', '已审核'])",
                weight: '@integer(10, 100)',
                length: '@integer(10, 100)',
                height: '@integer(100, 200)',
                width: '@integer(100, 200)',
                color: `@pick(['红','黄','蓝','黑'])`,
                /** 生产日期 */
                production_date: '@now',
                /** 商品有效期 */
                shelf_life: '@integer(12, 24)',
                supplier_id: '@id',
                brand_id: '@id',
                background: `@pick(${colors})`,
                image: function() {
                    return Random.image('600x300', this.background, '#ffffff', Random.title(2, 3))
                },
                create_time: '@now',
                update_time: '@now',
                indate: '@now',
            }
        ]
    });
    return {
        items: data.items,
        num: data.items.length,
    };
}

mockRequest(`${API_GOODS_LIST}/list`, 'post', opts => {
    let size = parseInt(opts.pageSize) || 20,
        page = parseInt(opts.currentPage) || 1,
        total = 1000000;

    let { items, num } = generateList(size);

    return {
        num,
        size,
        total,
        items,
    };
});
