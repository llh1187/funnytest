console.log([...Array(7).keys()].map(days => new Date(Date.now() + 86400000 * days)));
//[...Array(7).keys()].map(days => new Date(Date.now() + 86400000 * days));
//A=>B �ǽ�B�����ֵ��A
// 86400000��λ�Ǻ���  ����һ�졣
// Date.now() ����������1970��1��1�� 00:00:00 UTC����ǰʱ��ĺ�������
//map ���ؼ�ֵ��
//��չ�������spread���������㣨...�������ñ� rest �����������㣬��һ������תΪ�ö��ŷָ��Ĳ�������

   
