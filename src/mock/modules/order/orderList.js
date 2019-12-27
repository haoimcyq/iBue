import { mockRequest } from '@/mock/mockRequest';
import { API_ORDER_LIST } from '@/config/apiTypes';

function generateList(len = 1) {

    let data = mockRequest({
        [`items|${len}`]: [
            {
                id: '@id',
                order_id: '@id',
                user_id: '@id',
                product_id: '@id',
                category_id: '@id',
                user_name: '@cname',
                order_phone: /^1[3-9]\*\*\*\*\*\d{4}$/,
                order_address: '@county(true)',
                order_user_name: '@cname',
                order_remark: '@cword(0, 40)',
                order_express: "@pick(['211限时达','大家电211限时达','次日达','夜间配','大家电夜间配','定时达','极速达','隔日达'])",
                order_invoice_name: '@cword(8,20)',
                order_invoice_definite: '@cword(0,30)',
                order_invoice_type: "@pick(['增值税专用发票','普通发票','专业发票'])",
                order_status: "@pick(['已取消', '未付款', '已付款', '已发货', '交易成功', '交易关闭'])",
                order_express_info: '@county(true)',
                payment_type: "@pick(['货到付款','在线支付','信用卡支付'])",
                title: '@ctitle(6, 20)',
                price: '@float(100, 10000, 0, 2)',
                payment: '@float(100, 10000, 0, 2)',
                payment_time: '@datetime',
                quantity: '@integer(1, 10)',
                total_price: '@float(100, 10000, 0, 2)',
                end_time: '@datetime',
                send_time: '@datetime',
                close_time: '@datetime',
                postage: '@float(10, 28, 0, 2)',
                create_time: '@datetime',
                update_time: '@datetime'
            }
        ]
    });
    return {
        items: data.items,
        num: data.items.length,
    };
}

mockRequest(`${API_ORDER_LIST}/list`, 'post', opts => {
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
