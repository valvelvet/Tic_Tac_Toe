function PrefixInteger(num){
  return('00'+num).substring(num.length)
};
//當前的select中的年和月來顯示日期
function showDates(){
  var year = $('#year').val();      //輸入的年
  var month = $('#month').val()-1;  //輸入的月

  var firstDayWeek = new Date(year,month,1).getDay(); // 獲取選擇的年月的第一天是星期幾
  var monthDays = new Date(year,month+1,0).getDate();   //建立一個輸入年月計算出這個月有幾天的函式
  $('#calenderDates label span').text('');    // 清空月曆

  //建立空白日
  for(let k=0;k<=firstDayWeek;k++){
    $(`#calenderDates tr:nth-of-type(1) td:nth-of-type(${k}) label span`).text('-');
    $(`#calenderDates tr:nth-of-type(1) td:nth-of-type(${k}) label input`).attr('disabled',true);
  };

  //建立日期
  for(let j=1;j<=monthDays;j++){
    $(`#calenderDates tr:nth-of-type(${parseInt((6-new Date(year,month,j).getDay()+j)/7+1)}) td:nth-of-type(${new Date(year,month,j).getDay()+1}) label span`).text(j);
    $(`#calenderDates tr:nth-of-type(${parseInt((6-new Date(year,month,j).getDay()+j)/7+1)}) td:nth-of-type(${new Date(year,month,j).getDay()+1}) label input`).attr('disabled',false).attr('checked',false);
    if(month<now.getMonth() || (j<now.getDate() && month==now.getMonth())){
      // 今天以前:disabled:true
      $(`#calenderDates tr:nth-of-type(${parseInt((6-new Date(year,month,j).getDay()+j)/7+1)}) td:nth-of-type(${new Date(year,month,j).getDay()+1}) label input`).attr('disabled',true);
    }else if(j==now.getDate() && month==now.getMonth()){
      // 今天
      $(`#calenderDates tr:nth-of-type(${parseInt((6-new Date(year,month,j).getDay()+j)/7+1)}) td:nth-of-type(${new Date(year,month,j).getDay()+1}) label input`).attr('checked',true);
    }else if(j>=now.getDate() || month>=now.getMonth()){
      // 今天以後:disabled:false
      $(`#calenderDates tr:nth-of-type(${parseInt((6-new Date(year,month,j).getDay()+j)/7+1)}) td:nth-of-type(${new Date(year,month,j).getDay()+1}) label input`).attr('disabled',false);
    };
  };
};
//獲取當前的日期
var now = new Date();
$(function () {
  $('#year').append(`<option selected>${now.getFullYear()}</option>`);
  $('#year').append(`<option>${now.getFullYear()+1}</option>`);
  for(let i=0;i<=11;i++){
    if(i==now.getMonth()){
      $('#month').append(`<option selected>${i+1}</option>`);
    }else if(i<now.getMonth()){
      $('#month').append(`<option disable>${i+1}</option>`);
    }else if(i>now.getMonth()){
      $('#month').append(`<option>${i+1}</option>`);
    };
  };
  showDates();
  $('#year').on('change',function(){showDates();});//當選項改變時
  $('#month').on('change',function(){showDates();});//當選項改變時


  // 改變場次的日期
  $('.session .head p').text(`${$('#year').val()}年 ${$('#month').val()}月 ${$(`#calenderDates input:checked + span`).text()}日`);
  // 改變預約確認的主題
  $(`.check_data label:nth-of-type(1) input`).val(`${$('.choose option:selected').text()}`);
  // 改變預約確認的參與人數
  $(`.check_data label:nth-of-type(2) input`).val(`${$('.players input:checked + span').text()}`);
  // 改變預約確認的日期
  $(`.check_data label:nth-of-type(3) input`).val(`${$('#year').val()}-${PrefixInteger(`${$('#month').val()}`)}-${PrefixInteger(`${$(`#calenderDates input:checked + span`).text()}`)}`);


  $('#calenderDates input[name=data]').on('change',function(){
    // 改變場次的日期
    $('.session .head p').text(`${$('#year').val()}年 ${$('#month').val()}月 ${$(`#calenderDates input:checked + span`).text()}日`);
    // 改變預約確認的日期
    $(`.check_data label:nth-of-type(3) input`).val(`${$('#year').val()}-${PrefixInteger(`${$('#month').val()}`)}-${PrefixInteger(`${$(`#calenderDates input:checked + span`).text()}`)}`);
  });
  $('.session input[name=empty_time]').on('click',function(){
    // 改變預約確認的主題
    $(`.check_data label:nth-of-type(1) input`).val(`${$('.choose option:selected').text()}`);
    // 改變預約確認的參與人數
    $(`.check_data label:nth-of-type(2) input`).val(`${$('.players input:checked + span').text()}`);

  })
});
